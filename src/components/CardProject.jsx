import './css/cardProject.css'
import { Link } from 'react-router-dom'
import formattedNumber from '../middleware/formatNumber';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'

import {addToCart} from '../redux/actions/operationActions';


const CardProject = ({project, cart}) => {
    const {id, name, description, tonsOfOxygen, price , image, sold} = project
    console.log(sold);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.user);

    const isProductInCart = cart.some(item => item.id === id);

    const request = {
        idEntityUser: user,
        idProject: project.id,
    }

    const addCartStorage = () => {
        if (isProductInCart) {
            
            Swal.fire({
              title: 'Este producto ya está en tu carrito',
              icon: 'info',
            });
          }else{
            Swal.fire({
                title: '¿Seguro que desea agregar este proyecto al carrito?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {

                    dispatch(addToCart(request))
                    .then(({payload}) =>{
                        console.log(payload);
                        if(payload.statusCode === 201){
                            const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
                            currentCart.push(project);
                            localStorage.setItem('cart', JSON.stringify(currentCart));
                            navigate("/cart")
                            location.reload();
                        }else if(payload.status === 400){
                            Swal.fire({
                                title: 'Error',
                                text: 'Ocurrio un error',
                                icon: 'error',
                            });
                        }  
                    })
                    
                }
            });
          }
       
    };

    const imgDefault = "https://ik.imagekit.io/900hpd9ky/CO2/imagen-por-defecto.png?updatedAt=1698270724661";
    return (
        <div className={`card-component ${sold ? 'sold-out' : ''}`}> 
            <div className="container-card-img">
                <img src={!image ? imgDefault : image.fileNameURL.substring(0,4) !== "http" ? imgDefault : image.fileNameURL} />
            </div>
            <div className="card-body-component">
                <h4 className="card-title">{name}</h4>
                <p className="card-text"><span className='fw-bold fs-5'>Descripccion:</span> {description}</p>
                <p className="card-body-co2" ><span className='fw-bold'> Reduccion de CO2e:</span>  {tonsOfOxygen}T</p>
                <p className='card-body-price'> <span className='fw-bold'>Precio:</span>   {formattedNumber(price)}</p>

                <div className='container-buton-card'>
                    {isProductInCart ? (
                        <>
                        <div className='text-danger button-card-carrito'>Proyecto ya seleccionado</div>
                        <Link
                        className='button-card-detalles'
                        to={`/project/${id}`}
                        >
                            <i className="bi bi-info-circle-fill"></i>
                        </Link>
                        </>
                    ) : sold ? (
                        <div className='text-white bg-danger col-12 text-center'>Proyecto agotado</div>
                    ) : cart.length == 0 ? (
                        <>
                         <Link 
                            className="button-card-carrito"
                            onClick={addCartStorage}
                        >
                            <i className="bi bi-cart-plus"></i>
                        </Link>
                         <Link
                         className='button-card-detalles'
                         to={`/project/${id}`}
                        >
                            <i className="bi bi-info-circle-fill"></i>
                        </Link>
                        </>
                       
                    ) : (
                        <>
                        <div className="button-card-carrito">Ya tiene un proyecto en el carrito</div>
                        <Link
                        className='button-card-detalles'
                        to={`/project/${id}`}
                        >
                            <i className="bi bi-info-circle-fill"></i>
                        </Link>
                        </>
                        
                    )}
                    
                </div>

            </div>
        </div>
    )
}

export default CardProject;
