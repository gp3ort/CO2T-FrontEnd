import './css/login.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import { register } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
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

      const handleSubmit = (e) => {
        e.preventDefault();
        const request = { ...formData };
        for (const key in request) {
          if (!request[key]) {
            delete request[key];
          }
        }
        dispatch(register(request)).then(({ payload }) => {
          if (payload?.errors) {
            console.log("Manejar los errores");
          }
          if (payload?.user) {
            console.log(" Navigate home");
          }
        });
      };

      const handleInput = (e) => {
        const { name, value } = e.target;
        const aux = {...formData};
        aux[name] = value;
        setFormData(aux);
      };

      return (
        <div className='container'>
          
          <div className='container-form'>
            <div className='container-icon'>
              <Link to="/">
                <i className="bi bi-arrow-left icon"></i>
              </Link>
            </div>
            <h2>Sign Up</h2>
            <Form
              className="form"
              onSubmit={handleSubmit}
              onInput={handleInput}
            >
            <Form.Group className="mb-3 col-10 ">
              <p>Business Name</p>
              <Form.Control className="input-form" type="text"  name="businessName" />
            </Form.Group>
            <Form.Group className="mb-3 col-10 ">
              <p>Email</p>
              <Form.Control className="input-form" type="email"  name="email" />
            </Form.Group>
            <Form.Group className="mb-3 col-10 ">
              <p>Name</p>
              <Form.Control className="input-form" type="text"  name="name" />
            </Form.Group>
            <Form.Group className="mb-3 col-10 ">
              <p>Password</p>
              <Form.Control className="input-form" type="password"  name="password" />
            </Form.Group>
            <Form.Group className="mb-3 col-10 ">
              <p>Address</p>
              <Form.Control className="input-form" type="text"  name="address" />
            </Form.Group>
            <Form.Group className="mb-3 col-10 ">
              <p>Description</p>
              <Form.Control className="input-form" type="text"  name="description" />
            </Form.Group>
            <Form.Group className="mb-3 col-10 ">
              <p>Phone Number</p>
              <Form.Control className="input-form" type="text"  name="phoneNumber" />
            </Form.Group>
            <button type="submit">Sign Up</button>
            </Form>
          </div>
          <div className='container-img'>
            <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt=""/>
          </div>
      </div>
      )
  }
  
  export default Signup;

  {/*             <form className='form'>
              
              <p>Email</p>
              <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <p>Password</p>
              <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <p>Phone</p>
              <input 
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
              <p>Cuit</p>
              <input 
              type="text"
              value={cuit}
              onChange={(e) => setCuit(e.target.value)}
              />
              <p>Entity</p>
              <input 
              type="text"
              value={entity}
              onChange={(e) => setEntity(e.target.value)}
              />
              <button type="submit">Sign Up</button>
            </form> */}