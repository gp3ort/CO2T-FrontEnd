import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjectById , getAllProjects} from "../redux/actions/projectActions";
import formattedNumber from "../middleware/formatNumber";
import './css/project.css'

const Project = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    console.log(id);

    useEffect(() => {
        dispatch(getProjectById(id));
      }, []);

      
    useEffect(() =>{
        dispatch(getAllProjects())
    }, [])
   
    const project = useSelector((state) => state.projects.project);
    const allProjects = useSelector(state => state.projects.allProjects);

    console.log(project);

    return (
        <>
        <div className="container-projectId">
            {project ? (
                <>
                <div className="container-project-selected">
                    {" "}
                    <div className="container-img-selected">
                        <img src={project.image.fileNameURL} alt="" />
                    </div>
                    <div className="container-description-selected">
                        <h2>Descripcion</h2>
                        {project.description}
                    </div>
                </div>
                
                    <form className="container-form-project">
                        <div className="container-form-project-div">
                            <h2>{project.name}</h2>
                            <p className="container-form-project-price"> {formattedNumber(project.price)}</p>
                        </div>
                          
                        <div className="container-form-project-button">
                            <button>Agregar al carrito</button>
                            <button>Volver</button>
                        </div>
                    </form>
                
                </>
            ) : (
                <h2>No hay proyecto</h2>
            )}
        </div>
        </>
    )
}

export default Project;