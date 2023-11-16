import React, { useEffect, useState } from "react";
import useMercadoPago from "../hooks/useMercadoPago";
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import formattedNumber from "../middleware/formatNumber";
import { useNavigate } from 'react-router-dom';

import './css/pay.css'
import { Link, Navigate } from "react-router-dom";
import {processCart} from '../redux/actions/operationActions';
import { useDispatch,useSelector } from 'react-redux'
import Swal from 'sweetalert2';


const INITIAL_STATE = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
};

const Pay =() =>{
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const project = cart[0]



    const [state, setState] = useState(INITIAL_STATE);
    
    const { user } = useSelector((store) => store.user);


    
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.dataset.name || e.target.name]: e.target.value,
        });
    };

    const handleInputFocus = (e) => {
        setState({ ...state, focus: e.target.dataset.name || e.target.name });
    };
    const resultPayment = useMercadoPago();  
    console.log(resultPayment);

   
    const finishPay = () =>{
        const request = {
            idEntityUser: user,
            idProject: project.id || 0,
        }
        dispatch(processCart(request))
        .then(({payload}) =>{
                    
            if(payload.statusCode === 200){
                navigate("/certificate")
            }else if(payload.status=== 400){
                    Swal.fire({
                        title: 'Error',
                        text: 'Ocurrio un error',
                        icon: 'error',
                    });
            }
        })           
    }
     


    return (
        <>
        <div>
           
        </div>

        <section className="payment-form dark">
            
            <div className="container__payment">
                <div className="block-heading">
                    <h2>Pago con tarjeta</h2>
                    <p>This is an example of a Mercado Pago integration</p>
                </div>
                <div className="form-payment">
                    <div className="products">
                        <h2 className="title">Resumen</h2>
                        
                        <div className="item">
                            <span className="price" id="summary-price">{formattedNumber(project.price) }</span>
                            <p className="item-name">  {project.name} x <span id="summary-quantity">1 </span>   </p>
                        </div>
                        <div className="total">
                            Total<span className="price" id="summary-total">{formattedNumber(project.price) } </span>
                        </div>
                    </div>
                    <div className="payment-details">
                        <form id="form-checkout">
                            <h3 class="title">Detalles del comprador</h3>
                            <div className="row">
                                <div className="form-group col">
                                    <input
                                        type="email"
                                        name="cardholderEmail"
                                        id="form-checkout__cardholderEmail"
                                        onFocus={handleInputFocus}
                                        className="form-control my-3"
                                    />
                                
                                </div>
                            </div>

                            <div className="row" >
                                <div className="form-group col-sm-5">
                                    
                                    <select
                                        name="identificationType"
                                        id="form-checkout__identificationType"
                                        className="form-select "
                                    ></select>
                                </div>
                                <div className="form-group col-sm-7">
                                    <input
                                        type="text"
                                        name="identificationNumber"
                                        id="form-checkout__identificationNumber"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <br/>
                            <h3 className="title">Detalles de la tarjeta</h3>
                            <div className="row">
                                <div className="form-group col-sm-8 my-3">
                                        <input
                                            type="text"
                                            name="cardholderName"
                                            id="form-checkout__cardholderName"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            className="form-control "
                                        />
                                </div>
                                <div className="form-group col-sm-4">
                                    <div className="input-group expiration-date my-3">
                                        <input
                                            type="tel"
                                            name="cardExpirationMonth"
                                            id="form-checkout__cardExpirationMonth"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            className="form-control"
                                           
                                        />
                                        <input
                                            type="tel"
                                            name="cardExpirationYear"
                                            id="form-checkout__cardExpirationYear"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            className="form-control h-40"
                                            
                                        />
                                        
                                    </div>
                                        
                                </div>

                                <div className="form-group col-sm-8">
                                  
                                        <input
                                            type="tel"
                                            name="cardNumber"
                                            id="form-checkout__cardNumber"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            className="form-control h-40"
                                        />
                                </div>
                                <div className="form-group col-sm-4">
                                    
                                        <input
                                            type="tel"
                                            name="cvc"
                                            id="form-checkout__securityCode"
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            className="form-control h-40"
                                        />
                                        
                                  
                                </div>

                                <div id="issuerInput" className="form-group col-sm-12 hidden  my-3">
                                        <select
                                            name="issuer"
                                            id="form-checkout__issuer"
                                            on
                                            className="form-select"
                                        ></select>
                                </div>
                                <div className="form-group col-sm-12 mb-3">
                                    <select
                                        name="installments"
                                        id="form-checkout__installments"
                                        className="form-select"
                                    ></select>
                                </div>

                               
                                
                                <div className="form-group col-sm-12 d-flex align-items-center justify-content-center col-12 p-0 container-card-credit">
                                
                                    <Cards 
                                        cvc={state.cvc}
                                        expiry={state.cardExpirationMonth + state.cardExpirationYear}
                                        name={state.cardholderName}
                                        number={state.cardNumber}
                                        focused={state.focus}
                                        brand={state.issuer}
                                    
                                    />
                                    <div className="text-center mx-4">
                                        <button type="submit" onClick={finishPay} id="form-checkout__submit" className="btn btn-primary btn-block col-12">
                                            Pagar
                                        </button>
                                       
                                        <Link to="/cart" >
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
                                            Volver al carrito
                                        </Link>
                                    </div>
                                   
                                   
                                </div>
                                <progress value="0" className="progress-bar d-none">
                                    Cargando...
                                </progress>
        
                            </div>
                            
                        </form>
                       
                        
                    </div>
                </div>
                
                
            </div>
            {resultPayment && 
            <>
            {Swal.fire({
                position: 'center',
                icon: 'success',
                title: resultPayment.detail,
                showConfirmButton: false,
                text: resultPayment.status,
                timer: 1500
            })}
            </>
            }
        </section>
        
        </>

        
    )
}

export default Pay;


