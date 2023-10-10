import './css/login.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { login } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function Login(){

    const [formData, setFormData] = useState({
       businessName: "",
       password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const request = { ...formData };
      const businessName = e.target.businessName.value;
      const password = e.target.password.value;
      
      if (!businessName || !password) {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please complete all fields.",
        }); 
      }

      dispatch(login(request))
      .then(({ payload }) => {
        if(payload.status  == 400){
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: payload.data.errorMessage[0],
          });
        }else{
          console.clear();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/");
        }
      });
    };
    const handleInput = (e) => {
      const { name, value } = e.target;
      const aux = { ...formData };
      aux[name] = value;
      setFormData(aux);
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='container'>
          
          <div className='container-form'>
            <div className='container-title'>
              <div className='container-icon'>
                  <Link to="/">
                    <i className="bi bi-arrow-left icon"></i>
                  </Link>
              </div>
              <h1>Login</h1>
            </div>
            
            <Form
              onSubmit={handleSubmit}
              onInput={handleInput}
              className='form'
            >
              <Form.Group className='container-input'>
                <p>Business Name</p>
                <Form.Control type="text"  name="businessName" className="input-form"/>
              </Form.Group>
              <Form.Group className='container-input'>
                <p>Password</p>
                <div className="password-input-container">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input-form"
                  />
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye-slash" : "bi-eye"
                    } password-toggle`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
              </Form.Group>
              <div className='container-link'>
                <button className='button' type="submit">Login</button>
                <Link to="/signup">If you do not have an account you can register</Link>
              </div>

            </Form>
          </div>
          <div className='container-img'>
            <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt=""/>
          </div>
        </div>
    )
}

export default Login;