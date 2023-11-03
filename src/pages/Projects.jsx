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

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, []);


    const filteredProjects =  filterProjects(allProjects, search).filter(project => project.sold === false);

    return (
       
        <>
        <div className="carrousel">
            <h1>
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
                filteredProjects.map((item) => <CardProject key={item.id} project={item} cart={cart}/>)
                ) : (
                <div className="col-12">
                    <h2 className="text-center m-2">
                        No se encontraron proyectos acorde a su busqueda 
                    </h2>
                </div>
                
            )}
            </div>
        </div>

        </>
    )
}

export default Projects;
