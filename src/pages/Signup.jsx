import './css/login.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import { register } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Signup(){

      const [formData, setFormData] = useState({
        businessName: "",
        email: "",
        name: "",
        password: "",
        entityType: 1,
        address: "",
        description: "",
        phoneNumber: "",
        idRol: 1
      });

      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleSubmit = (e) => {
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
        const description = e.target.description.value;
        const phoneNumber = e.target.phoneNumber.value;
      

        if (!businessName || !email || !name || !password || !address || !description || !phoneNumber) {
          
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please complete all fields.",
          });
          return; 
        }
        dispatch(register(request)).then(({ payload }) => {
          console.log(payload);
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
            navigate("/login");
          }
        });
      };

      const handleInput = (e) => {
        const { name, value } = e.target;
        const aux = {...formData};
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
              <h1>Sign Up</h1>
            </div>
            
            <Form
              className="form"
              onSubmit={handleSubmit}
              onInput={handleInput}
            >
              <Form.Group className="container-input">
                <p>Business Name</p>
                <Form.Control
                  className="input-form"
                  type="text"
                  name="businessName"
                />
              </Form.Group>
              <Form.Group className="container-input">
                <p>Email</p>
                <Form.Control 
                  className="input-form"
                  type="email"  
                  name="email" 
                  placeholder='Example@gmail.com'
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
                <p>Description</p>
                <Form.Control 
                  className="input-form" 
                  type="text"  
                  name="description" 
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
