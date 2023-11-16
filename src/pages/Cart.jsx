import './css/cart.css'
import formattedNumber from '../middleware/formatNumber';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { cancelCart} from '../redux/actions/operationActions';

const Cart = () =>{
    window.scrollTo(0, 0);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const project = cart[0]
   
    const { user } = useSelector((store) => store.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cancelProject = () =>{
        const request = {
            idEntityUser: user,
            idProject: project.id || 0,
        }
        dispatch(cancelCart(request))
        .then(({payload}) =>{
            if(payload.statusCode === 200){
                localStorage.removeItem('cart');
                navigate("/projects")
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
                <>
                <div className='col-6'>
                <Link to="/projects" className='text-black'>
                    <i className="bi bi-arrow-left icon"></i>
                </Link>
                </div>
                <div className="text-NoProjects">
                    
                   
                    <h2 className="text-center">No hay proyectos en su carrito</h2>
                </div>
                </>
            ) : (
                <>
                    <section className="shopping-cart dark">
                        <div className="container container__cart">
                        <div className="block-heading">
                            <h2>Carrito de compra</h2>
                            <p>Aqui podra avanzar con el proceso de compra o cancelar</p>
                        </div>
                        <div className="content">
                            <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                <div className="product">
                                    <div className="info">
                                    <div className="product-details">
                                        <div className="row justify-content-md-center">
                                        <div className="col-md-3">
                                            <img
                                                    className="img-fluid mx-auto d-block image"
                                                    src={project.image.fileNameURL}
                                            />
                                        </div>
                                        <div className="col-md-4 product-detail">
                                            <h5>Proyecto</h5>
                                            <div className="product-info">
                                            <p>
                                                <b>Nombre: </b><span >{project.name}</span><br />

                                                <b>Descripcion: </b><span id="product-description">{project.description}</span><br />
                                                
                                                <b>Price:</b><span id="unit-price">{formattedNumber(project.price)}</span>
                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 product-detail">
                                            <label for="quantity"><h2>Cantidad</h2></label>
                                            <input type="text" disabled value="1" min="1" className="form-control" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="summary">
                                <h3>Cart</h3>
                                <div className="summary-item">
                                        <span className="text">Subtotal</span><span className="price">{formattedNumber(project.price)} </span>
                                </div>

                                <div className='col-12 d-flex flex-column justify-content-between m-1'>
                                    <Link 
                                        className='btn btn-primary btn-lg btn-block  m-1 col-12'
                                        to="/pay"
                                    >
                                        Avanzar
                                    </Link>
                                    
                                    <br />
                                    <Link onClick={cancelProject} className='text-decoration-none'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 10 10"
                                                className="chevron-left"
                                            >
                                            <path
                                                fill="#009EE3"
                                                fill-rule="nonzero"
                                                id="chevron_left"
                                                d="M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z"
                                            ></path>
                                            </svg>
                                            
                                            Volver
                                        </Link>
                                </div>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    )
}

export default Cart;