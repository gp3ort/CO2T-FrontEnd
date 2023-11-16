import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Confetti from 'react-confetti'
import { buildCertificate } from '../redux/actions/certificateActions'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FileSaver from 'file-saver';
import './css/certificate.css'
import axios from "axios"


const Certificate = () =>{
    const { user } = useSelector((store) => store.user);

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const project = cart[0]

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(user);
    console.log(project);

    const [pdfData, setPdfData] = useState(null);

    const dowloandCertificate = async () =>{
        const body = {
            idEntity: user,
            idProject: project.id,
        }
        const certificateQuery = axios.create({
            baseURL: 'https://localhost:7179/api/Certificate',
        })
        try{
            const request = await certificateQuery.post("/buildCertificate",body)
            console.log(request);
            setPdfData(request.data);
            const blob = new Blob([pdfData], { type: 'application/pdf' });
            console.log('Blob size:', blob.size);
            console.log('Blob type:', blob.type);
            FileSaver.saveAs(blob, 'certificado.pdf');
            return request
        }catch(error){
            console.log(error.response);
            return error.response
        }

    }
/*         dispatch(buildCertificate(request))
        .then(({payload}) =>{  
            console.log(payload.status);
            if (payload.status === 200) {
                setPdfData(payload.data);
                console.log(pdfData);
                handleDownload();
              } else if (payload.status === 400) {
                Swal.fire({
                  title: 'Error',
                  text: 'Ocurrió un error',
                  icon: 'error',
                });
              }
        })     */    
   
    const returnHome = ()=>{
        localStorage.removeItem('cart');
        navigate('/')
    }

    const handleDownload = () => {
        console.log(pdfData);
        if (pdfData) {
            const blob = new Blob([pdfData], { type: 'application/pdf' });
            console.log('Blob size:', blob.size);
            console.log('Blob type:', blob.type);
            FileSaver.saveAs(blob, 'certificado.pdf');
        }
    };

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