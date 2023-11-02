import { logout } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState , useEffect} from "react";
import './css/navBarMain.css'

function NavrBarMain(){
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.user);
    console.log(user);
    const token = localStorage.getItem("miToken"); 
    
    const handleClick = () => {
      dispatch(logout());
    };

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      const cartJson = localStorage.getItem("cart");
      const cart = cartJson ? JSON.parse(cartJson) : [];
      setCartCount(cart.length);
    }, []);

    return (
      <header
        className="container-nav" 
      >
        <div>
          <Link 
            to="/"
            className="link-title"
          >
             <h1>CO2</h1>
          </Link>
          
        </div>
        <nav className="d-flex align-items-center">
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
                    <ul className="navbar-nav d-flex align-items-center">
                      <Link className="link" to="/cart">
                        
                        {cartCount > 0 ?( // Muestra la cantidad solo si hay proyectos en el carrito
                         
                          <i className="bi bi-cart icon"> <span className="cart-count">{cartCount}</span></i>
                        ) : (
                          <i className="bi bi-cart icon"></i>
                        )}
                      </Link>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-person-fill icon"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <Link className="link" to="/" onClick={handleClick}>
                            Cerrar Sesión
                          </Link>
                        </ul>
                      </li>
                    </ul>
                  </>
          )}
        </nav>
      </header>
    );
}
export default NavrBarMain;