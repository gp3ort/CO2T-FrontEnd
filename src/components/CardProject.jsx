import './css/cardProject.css'
import { Link } from 'react-router-dom'
import formattedNumber from '../middleware/formatNumber';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';


const CardProject = ({project, cart}) => {
    const {id, name, description, price , image} = project
    const navigate = useNavigate();


    const isProductInCart = cart.some(item => item.id === id);


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
                    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
                    currentCart.push(project);
                    localStorage.setItem('cart', JSON.stringify(currentCart));
                    navigate("/cart")
                    location.reload();
                    
                }
            });
          }
       
    };

    const imgDefault = "https://ik.imagekit.io/900hpd9ky/CO2/imagen-por-defecto.png?updatedAt=1698270724661";
    return (
        <div className="card-component"> 
            <div className="container-card-img">
                <img src={!image ? imgDefault : image.fileNameURL.substring(0,4) !== "http" ? imgDefault : image.fileNameURL} />
            </div>
            <div className="card-body-component">
                <h4 className="card-title">{name}</h4>
                <p className="card-text"> {description}</p>
                <p className='card-body-price'> Precio:  {formattedNumber(price)}</p>
                <div className='container-buton-card'>
                    {isProductInCart ? (
                        <div className='text-danger button-card-carrito'>Proyecto ya seleccionado</div>
                    ) : cart.length == 0 ? (
                        <Link 
                            className="button-card-carrito"
                            onClick={addCartStorage}
                        >
                            <i className="bi bi-cart-plus"></i>
                        </Link>
                    ) : (
                        <div className="button-card-carrito">Ya tiene un proyecto en el carrito</div>
                    )}
                    <Link
                        className='button-card-detalles'
                        to={`/project/${id}`}
                    >
                        <i className="bi bi-info-circle-fill"></i>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default CardProject;