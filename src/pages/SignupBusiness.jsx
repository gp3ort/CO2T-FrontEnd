import './css/login.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import { register } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import validarPassword from '../middleware/validatorPassword';


const Signup = () => {

      const [formData, setFormData] = useState({
        businessName: "",
        email: "",
        name: "",
        password: "",
        entityType: localStorage.getItem("idEntity"),
        address: "",
        phoneNumber: "",
        description: "",
        idRol: 3,
      });

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        const request = { ...formData };

        
        for (const key in request) {
          if (!request[key]) {
            delete request[key];
          }
        }


        const businessName = e.target.businessName.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const address = e.target.address.value;
        const phoneNumber = e.target.phoneNumber.value;
        const entityType =  localStorage.getItem("idEntity");
      

        if (!name || !businessName || !email || !password || !address || !phoneNumber || !entityType) {
          return Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please complete all fields.",
          });
          
        }

        try {

          await validarPassword(password);

          dispatch(register(request)).then(({ payload }) => {
            
            if(payload.status  == 400){
              return Swal.fire({
                icon: "error",
                title: "Error",
                text: payload.data.errorMessage[0],
              });
            }else{
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              localStorage.removeItem("idEntity")
              navigate("/login");
            }
          });
        
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error,
          });
        }
      };

      const handleInput = (e) => {
        const { name, value } = e.target;
        const aux = {...formData};
        aux[name] = value;
        setFormData(aux);
      };

      const [showPassword, setShowPassword] = useState(false);

      return (

        <div className='container' >
          
          <div className='container-form'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

            <div className='container-title'>
              <div className='container-icon'>
                <Link to="/entity">
                  <i className="bi bi-arrow-left icon"></i>
                </Link>
              </div>
              <h1>Register as a business</h1>
              <p>This information will be used to add it to the certificates</p>
            </div>
            
            <Form
              className="form"
              onSubmit={handleSubmit}
              onInput={handleInput}
            >
              <Form.Group className="container-input">
                <p>Email</p>
                <Form.Control 
                  className="input-form"
                  type="email"  
                  name="email" 
                  placeholder='Example@gmail.com'
                />
              </Form.Group>
              <div className='container-address'>
                <Form.Group className="container-input">
                  <p>UserName</p>
                  <Form.Control 
                    className="input-form" 
                    type="text"  
                    name="businessName"
                    placeholder='Example S.A'
                  />
                </Form.Group>
                <Form.Group className="container-input">
                  <p>Name</p>
                  <Form.Control 
                    className="input-form" 
                    type="text"  
                    name="name"
                    placeholder='John Doe'
                  />
                </Form.Group>
              </div>
              <Form.Group className="container-input">
                <p>Password</p>
                <div className="password-input-container">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input-form"
                      placeholder='Example123*'
                    />
                    <i
                      className={`bi ${
                        showPassword ? "bi-eye-slash" : "bi-eye"
                      } password-toggle`}
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  </div>
              </Form.Group>
              <div className='container-address'> 
                <Form.Group className="container-input">
                    <p>Address</p>
                    <Form.Control 
                    className="input-form" 
                    type="text"  
                    name="address" 
                    placeholder='1234 Main St'
                    />
                </Form.Group>
                <Form.Group className="container-input">
                    <p>Phone Number</p>
                    <Form.Control 
                        className="input-form" 
                        type="text"  
                        name="phoneNumber"
                        placeholder='11-2222-3333' 
                    />
                </Form.Group>
              </div>
              <Form.Group className="container-input">
                <p>Description</p>
                <Form.Control 
                  className="input-form"
                  type="text"  
                  name="description" 
                  
                />
              </Form.Group>
              <div className='container-link'>
                <button className='button' type="submit">Sign Up</button>
                <Link to="/login">If you already have an account, enter here</Link>
              </div>
            </Form>
          </div>
          <div className='container-img'>
            <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt=""/>
          </div>
      </div>
      )
  }
  
  export default Signup;
