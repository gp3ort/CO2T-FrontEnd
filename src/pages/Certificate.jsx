import React from 'react';
import { useSelector } from 'react-redux'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom';

import './css/certificate.css'
import axios from "axios"


const Certificate = () =>{
    const { user } = useSelector((store) => store.user);

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const project = cart[0]

    const navigate = useNavigate();

    const dowloandCertificate = async () =>{
        const body = {
            idEntity: user,
            idProject: project.id,
        }
        const certificateQuery = axios.create({
            baseURL: 'https://localhost:7179/api/Certificate',
        })
        try{

              const request = await certificateQuery.post("/buildCertificate",body  ,{ responseType: 'arraybuffer' })
              const url = URL.createObjectURL(new Blob([request.data], { type: 'application/pdf' }));
              const link = document.createElement('a');
  

                link.href = url;

                link.setAttribute("download","certificado.pdf");
                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
              
            const blob = new Blob([pdfData], { type: 'application/pdf' });
            localStorage.removeItem('cart')
            navigate("/")
        }catch(error){
            console.log(error.response);
            return error.response
        }

    }
 
   
    const returnHome = ()=>{
        localStorage.removeItem('cart');
        navigate('/')
    }

    return (
        <>
        <Confetti
            tweenDuration={1000}
            numberOfPieces={100}
        />
        <div className="d-flex flex-column justify-content-center align-items-center col-12 container-certificate gap-3">
            <div>
                <h1 className='text-center'>Felicidades</h1>
                <h4>Su transaccion fue exitosa</h4>
            </div>
            
            <p>Aqui puede descargar su certificado o volver al inicio</p>
            <div className="col-4 d-flex justify-content-around">
                <button type="button" className="btn btn-secondary" onClick={returnHome}>Inicio</button>
                <button type="button" className="btn btn-primary" onClick={dowloandCertificate}>Descargar</button>

            </div>
        </div>
        </>
        
    )
}

export default Certificate;