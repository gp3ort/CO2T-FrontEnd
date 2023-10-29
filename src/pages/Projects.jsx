import CardProject from "../components/CardProject";
import './css/projects.css';
import { getAllProjects } from '../redux/actions/projectActions'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef, useState } from "react";


const Projects = () => {
    window.scrollTo(0, 0);
    const [search, setSearch] = useState("");
    const inputSearch = useRef(null);
    const allProjects = useSelector(state => state.projects.allProjects);

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getAllProjects())
    }, [])
    
    const handleInput = () => {
        setSearch(inputSearch.current.value);
    };

    const filterProjects = (projects, searchTerm) => {
        if (!searchTerm) {
          return projects; 
        }
        searchTerm = searchTerm.toLowerCase();
        return projects.filter(project =>
          project.name.toLowerCase().includes(searchTerm)
        );
      };

    const filteredProjects = filterProjects(allProjects, search);

    return (
       
        <>
        <div className="carrousel">
            <h1 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                Explore nuestro catalogo de proyectos que tenemos para usted</h1>
        </div>
        <div className='container-selected-card'>
            <div className="container-search">
                <input
                    onInput={handleInput}
                    ref={inputSearch}
                    type="text"
                    placeholder="Nombre del proyecto"
                   
                />

            </div> 
            
            <h2>Proyectos</h2>
            <div className="container-project">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((item) => <CardProject key={item.id} project={item} />)
                ) : (
                <h2>
                    No hay proyectos
                </h2>
            )}
            </div>
        </div>

        </>
    )
}

export default Projects;

