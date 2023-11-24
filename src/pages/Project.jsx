import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjectById , getAllProjects} from "../redux/actions/projectActions";
import formattedNumber from "../middleware/formatNumber";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './css/project.css'
import {addToCart} from '../redux/actions/operationActions';

const Project = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.user);


    useEffect(() => {
        dispatch(getProjectById(id));
      }, []);
   
    const project = useSelector((state) => state.projects.project);
    const navigate = useNavigate();

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductInCart = cart.some(item =>{
        return item.id == id
    } );

    const request = {
        idEntityUser: user,
        idProject: id,
    }

    const addCartStorage = () => {
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
    };

    const imgDefault = "https://ik.imagekit.io/900hpd9ky/CO2/imagen-por-defecto.png?updatedAt=1698270724661";

    
    return (
        <>
        <div className="container-projectId">
            
                <Link to="/projects" className="container-back-icon">
                  <i className="bi bi-arrow-left icon"></i>
                </Link>
            {project ? (
                <>
                <div className="container-project-selected">
               
                    {" "}
                    <div className="container-img-selected">
                    <img src={!project.image ? imgDefault : project.image.fileNameURL.substring(0,4) !== "http" ? imgDefault : project.image.fileNameURL} />
                    </div>
                    <div className="container-description-selected">
                        <h2>Descripcion</h2>
                        {project.description}
                    </div>
                    <br />
                    <h2>Compensacion de Co2</h2>
                    <p>Este proyecto tiene un total de {project.tonsOfOxygen}T de compensacion para el medio ambiente</p>
                </div>
                
                    <form className="container-form-project">
                        <div className="container-form-project-div">
                            <h2>{project.name}</h2>
                            <div className="d-flex justify-content-around align-items-center">
                                <p className="container-form-project-price"> {formattedNumber(project.price)}</p>
                                {isProductInCart ? (
                                    <div className='text-danger button-card-carrito m-1'>Proyecto ya seleccionado</div>

                                ) : cart.length == 0 ? (
                                    <Link 
                                        className="container-cart-icon"
                                        onClick={() => addCartStorage(project)}
                                    >
                                      <i className="bi bi-cart-plus icon"></i>
                                    </Link>
                                ) : (
                                    <div className="button-card-carrito">Carrito lleno</div>
                                )}
                                
                               
                            </div>
                           
                        </div>

                        <div className="container-form-check">
                            <h5>EVALUACIÓN VERIFICADA POR TECNOLOGÍA</h5>
                            <p>
                               Cada proyecto forestal
                               debe alinearse con nuestros Criterios de Evaluación para garantizar
                                que presentemos solo proyectos de la más alta calidad. Para evaluar
                                 un proyecto forestal, CO2 utiliza sensores remotos para revisar
                                una variedad de factores, incluida la pérdida de cubierta forestal
                                dentro y alrededor del área del proyecto. Este proyecto pasa
                                 nuestros controles de calidad de emisiones porque las emisiones
                                  reportadas están en línea con lo observado por CO2.</p>
                        </div>
                    </form>

                   
                
                </>
            ) : (
                <h2>No hay proyecto</h2>
            )}
        </div>
        </>
    )
}

export default Project;