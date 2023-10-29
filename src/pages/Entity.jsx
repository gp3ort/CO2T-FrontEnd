import './css/entity.css';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import { ENTITYS } from './entitys';
import Swal from 'sweetalert2';


function Entity(){
    

    const [formData, setFormData] = useState({
        entity: "",
     });

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const request = { ...formData };
        if(request.entity !== ""){
            const aux = ENTITYS.filter(entity => entity.description == request.entity)[0];
            if(aux.id){
                localStorage.setItem( "idEntity", aux.id)
                aux.id == 1 ? navigate('/SignupPerson') : navigate('/SignupBusiness');
            }
        }else{
            return Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please complete all fields.",
              }); 
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        const aux = { ...formData };
        aux[name] = value;
        setFormData(aux);
      };
    return (
        <div className='container-entity'>
            <Form 
                className='container-form-entity form'
                onSubmit={handleSubmit}
                onInput={handleInput}
            >
                    <div 
                    className='container-title-entity'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    >
                        <div className='container-icon'>
                            <Link to="/">
                            <i className="bi bi-arrow-left icon"></i>
                            </Link>
                        </div>
                        <h1>Seleccione una opcion para poder avanzar.</h1>
                    </div>
                    
                    <div 
                    className='container-selecter'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    >
                        <label className='container-radio'>
                            <div>
                                <h2>Individuo</h2>
                                <p className='text-radio'>Soy una persona</p>
                            </div>
                            <input type='radio' name='entity' value='Individual Person'/>
                        </label>
                        <label className='container-radio'>
                            <div>
                                <h2>Organizacion</h2>
                                <p className='text-radio'>somos un negocio</p>
                            </div>                         
                            <input type='radio' name='entity' value='Legal Entity'/>
                        </label>
                    </div>
                    <div 
                    className='container-link'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    >
                        <button className='button' type="submit">Continuar</button>
                        <Link to="/login">Si ya tiene una cuenta, ingrese aqui</Link>
                    </div>
            </Form>
          <div className='container-img-entity'>
            <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt=""/>
          </div>
        </div>
    )
}

export default Entity;