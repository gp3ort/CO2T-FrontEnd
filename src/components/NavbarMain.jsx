import { logout } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './css/navBarMain.css'

function NavrBarMain(){
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.user);
    const token = localStorage.getItem("miToken"); 
    const handleClick = () => {
      dispatch(logout());
    };
    
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
        <nav className="px-1">
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
                    <Link
                      className="link"
                      to="/projects"
                    >
                      Projectos
                    </Link>
                    <Link  
                      className="link"
                      to="/" 
                      onClick={handleClick}
                    >
                      Cerrar Sesión
                    </Link>
                    
                  </>
          )}
        </nav>
      </header>
    );
}
export default NavrBarMain;