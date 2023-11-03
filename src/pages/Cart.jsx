import './css/cart.css'
import formattedNumber from '../middleware/formatNumber';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import {addToCart, processCart} from '../redux/actions/operationActions';

const Cart = () =>{
    window.scrollTo(0, 0);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const project = cart[0]
   

    const { user } = useSelector((store) => store.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cancelProject = () =>{
        localStorage.removeItem('cart');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra cancelada',
            showConfirmButton: false,
            timer: 1500
        })
        navigate("/projects")
        location.reload();
    }

    const finishProject = () =>{
        const request = {
            idEntityUser: user,
            idProject: project.id,
        }
        

        dispatch(addToCart(request))
        .then(({payload}) =>{
            
            if(payload.statusCode === 201){
                dispatch(processCart(request))
                .then(({payload}) =>{
                    
                    if(payload.statusCode === 200){
                        
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Se genero la compra',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        localStorage.removeItem('cart');
                        navigate("/projects")
                        location.reload();
                    }
                })            
            }else if(payload.status === 400){
                Swal.fire({
                    title: 'Error',
                    text: 'Ocurrio un error',
                    icon: 'error',
                });
            }  
        })
    }

    return (
        <div className="container-cart">
            {!project ?(
                <div className='text-NoProjects' >
                    <h2 className="text-center ">No hay proyectos en su carrito</h2>
                </div>
            ) : (
                <>
                    <div className="card mb-3 m-3">
                        <img src={project.image.fileNameURL} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p>{project.description}</p>
                            <p className="card-text"><small className="text-body-secondary">{formattedNumber(project.price)}</small></p>
                        </div>
                    </div>

                    <div className='container-form-cart'>
                        <form className='form-cart'>
                            <Link 
                                className='button-cart-finish'
                                onClick={finishProject}
                            >
                                Terminar compra
                            </Link>
                            <Link 
                                className='button-cart-cancel'
                                onClick={cancelProject}
                            >
                                Cancelar
                            </Link>
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart;