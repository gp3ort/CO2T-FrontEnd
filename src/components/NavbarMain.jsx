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
          <h1>CO2</h1>
        </div>
        <nav className="px-1">
          {!user && !token ? (
                    <>
                      <Link className="link" to="/login">Login</Link>
                      <Link className="link" to="/entity">SignUp</Link>
                    </>
                  ) : (
                    <Link  className="link" to="/" onClick={handleClick}>
                      Log out
                    </Link>
          )}
        </nav>
      </header>
    );
}
export default NavrBarMain;