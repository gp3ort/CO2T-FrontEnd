import { logout , getUser} from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState , useEffect} from "react";
import './css/navBarMain.css'

function NavrBarMain(){
    const dispatch = useDispatch();
    const  {user }  = useSelector((store) => store.user);
    console.log(user);
    const token = localStorage.getItem("miToken"); 
    
    const handleClick = () => {
      dispatch(logout());
    };


    const userLogin = () =>{
      dispatch(getUser(user))
      .then(({payload}) =>{
        console.log(payload);
        if(payload.status === 200){
          setAuth(payload.data.result)
        }else if(payload.status === 400){
            Swal.fire({
                title: 'Error',
                text: 'Ocurrio un error',
                icon: 'error',
            });
        }  
      })
    }

    
    const [auth, setAuth] = useState(null);
    console.log(auth);
    const [cartCount, setCartCount] = useState(0);
    
    useEffect(() => {
      const cartJson = localStorage.getItem("cart");
      const cart = cartJson ? JSON.parse(cartJson) : [];
      setCartCount(cart.length);
    }, []);

    return (
      <>
      <header
        className="container-nav" 
      >
        <div >
          <Link 
            to="/"
            className="link-title"
          >
             <h1>CO2</h1>
          </Link>
          
        </div>
        <nav className="d-flex align-items-center p-2 gap-1">
          {!user && !token ? (
                    <>
                      <Link 
                        className="link"
                        to="/login"
                      >
                        Iniciar Sesión
                      </Link>
                      <Link 
                        className="link" 
                        to="/entity"
                      >
                        Registrarse
                      </Link>
                    </>
                  ) : (
                    <>
                    <Link className="link" to="/projects">
                      Proyectos
                    </Link>
                    <ul className="navbar-nav d-flex align-items-center gap-1">
                      <Link className="link p-1" to="/cart">
                        
                        {cartCount > 0 ?( 
                         
                          <i className="bi bi-cart icon"> <span className="cart-count">{cartCount}</span></i>
                        ) : (
                          <i className="bi bi-cart icon"></i>
                        )}
                      </Link>
                      <li className="nav-item dropdown">
                        <a className="p-1 nav-link dropdown-toggle link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-person-fill icon"></i>
                        </a>
                        <ul className="dropdown-menu">   
                            <Link
                              onClick={userLogin}
                              className="link dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal">
                              Perfil
                              <i className="bi bi-person-fill-gear p-3"></i>
                            </Link>
                    
                            <Link className="link dropdown-item" to="/" onClick={handleClick}>
                              Cerrar Sesión
                              <i className="bi bi-box-arrow-right p-3"></i>
                            </Link>
                        </ul>
                        
                      </li>
                    </ul>
                  </>
          )}
        </nav>
                    
      </header>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Perfil personal</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="container-perfil">
                <h6> Correo electronico</h6>
                <input type="text" placeholder="alfonso@gmail.com" disabled/>
                <div className="container-perfil-chilldrem">
                  <h6>Nombre usuario</h6>
                  <input type="text" placeholder={auth.businessName} disabled/>
                  <h6> Nombre completo</h6>
                  <input type="text" placeholder={auth.userName} disabled/>
                </div>
                <div className="container-perfil-chilldrem">
                  <h6> Medida de CO2</h6>
                  <input type="text" placeholder={auth.cO2Measure} disabled/>
                  <h6> Dirección</h6>
                  <input type="text" placeholder={auth.address} disabled/>
                </div>

                <div className="d-flex flex-column gap-1 col-12">
                  <h6>Telefono</h6>
                  <input type="text" placeholder={auth.phoneNumber} disabled/>
                  <h6>descripción</h6>
                  <input type="text" placeholder={auth.description} disabled/>
                  
                    <h6>Rol</h6>
                    <input type="text" placeholder={auth.rol} disabled/>
                    <h6>Tipo de entidad</h6>
                    <input type="text" placeholder={auth.entityType} disabled/>
                
                </div>
               
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}
export default NavrBarMain;