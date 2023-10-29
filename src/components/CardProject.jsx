import './css/cardProject.css'
import { Link } from 'react-router-dom'
import formattedNumber from '../middleware/formatNumber';

const CardProject = (project) => {
    console.log(project);
    const {id, name, description, price , image} = project.project

    const imgDefault = "https://ik.imagekit.io/900hpd9ky/CO2/imagen-por-defecto.png?updatedAt=1698270724661";
    return (
        <div className="card"
            data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container-card-img">
                <img src={!image ? imgDefault : image.fileNameURL.substring(0,4) !== "http" ? imgDefault : image.fileNameURL} />
            </div>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text"> {description}</p>
                <p className='card-body-price'> Precio:  {formattedNumber(price)}</p>

                <Link 
                    className='button-card-carrito'
                    to={`/project/${id}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </Link>
                <Link 
                    className='button-card-detalles'
                    to={`/project/${id}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default CardProject;