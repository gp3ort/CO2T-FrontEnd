import CardProject from "../components/CardProject";
import './css/projects.css';
import { filterProjects } from '../redux/actions/projectActions'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef, useState } from "react";


const Projects = () => {
    const [search, setSearch] = useState("");

    const [selectedFilter, setSelectedFilter] = useState("all");

    const inputSearch = useRef(null);

    const handleRadioChange = (event) => {
        setSelectedFilter(event.target.id);
    };

    useEffect(() => {
        if (selectedFilter) {
            dispatch(filterProjects(selectedFilter));
        }
    }, [selectedFilter]);


    const allProjects = useSelector(state => state.projects.allProjects);
    console.log(allProjects);
    const dispatch = useDispatch()
    
    const handleInput = () => {
        setSearch(inputSearch.current.value);
    };

    const filterProject = (projects, searchTerm, selectedFilter) => {
        if (!searchTerm) {
          return projects; 
        }
        searchTerm = searchTerm.toLowerCase();
        return projects.filter(project =>
            project.name.toLowerCase().includes(searchTerm) || (selectedFilter ? project.projectType === selectedFilter : true)
        );
    };

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, []);


    const filteredProjects = filterProject(allProjects, search, selectedFilter);

    return (
       
        <>

            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
                </label>
            
                <ul className="menu__box">
                <h3 className="text-center">Filtros</h3>
                        <div className="menu__item">
                            <input type="radio" id="all" onChange={handleRadioChange} checked={selectedFilter === "all"}/>
                            <label htmlFor="all">Todos</label>
                        </div>

                        <div className="menu__item">
                            <input type="radio" id="availables" onChange={handleRadioChange} checked={selectedFilter === "availables"}/>
                            <label htmlFor="availables">Disponibles</label>
                        </div>

                        <div className="menu__item">
                            <input type="radio" id="sold" onChange={handleRadioChange} checked={selectedFilter === "sold"}/>
                            <label htmlFor="sold">No disponibles</label>
                        </div>
                        
                        <div className="menu__item">
                            <input type="radio" id="1" onChange={handleRadioChange} checked={selectedFilter === "1"}/>
                            <label htmlFor="1">Forestales</label>
                        </div>
                        
                        <div className="menu__item">
                            <input type="radio" id="2" onChange={handleRadioChange} checked={selectedFilter === "2"}/>
                            <label htmlFor="2">Energías Renovables</label>
                        </div>
                    
                        <div className="menu__item">
                            <input type="radio" id="3" onChange={handleRadioChange} checked={selectedFilter === "3"}/>
                            <label htmlFor="3">Economias Circulares</label>
                        </div>
                        
                        <div className="menu__item">
                            <input type="radio"  id="4" onChange={handleRadioChange} checked={selectedFilter === "4"}/>
                            <label htmlFor="4">Ciencia aplicada</label>
                        </div>

                        <div className="menu__item">
                            <input type="radio" id="5" onChange={handleRadioChange} checked={selectedFilter === "5"}/>
                            <label htmlFor="5">Otros</label>

                        </div>
                </ul>
            </div>
        
        <div className="carrousel">
            <h1>Explore nuestro catalogo de proyectos que tenemos para usted</h1>
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
            <div className="container-project-filter">
                <div className="container-filter">
                    
                        <h3>Filtros</h3>
                        <div>
                            <input type="radio" id="all" onChange={handleRadioChange} checked={selectedFilter === "all"}/>
                            <label htmlFor="all">Todos</label>
                        </div>

                        <div>
                            <input type="radio" id="availables" onChange={handleRadioChange} checked={selectedFilter === "availables"}/>
                            <label htmlFor="availables">Disponibles</label>
                        </div>

                        <div>
                            <input type="radio" id="sold" onChange={handleRadioChange} checked={selectedFilter === "sold"}/>
                            <label htmlFor="sold">No disponibles</label>
                        </div>
                        
                        <div>
                            <input type="radio" id="1" onChange={handleRadioChange} checked={selectedFilter === "1"}/>
                            <label htmlFor="1">Forestales</label>
                        </div>
                        
                        <div>
                            <input type="radio" id="2" onChange={handleRadioChange} checked={selectedFilter === "2"}/>
                            <label htmlFor="2">Energías Renovables</label>
                        </div>
                    
                        <div>
                            <input type="radio" id="3" onChange={handleRadioChange} checked={selectedFilter === "3"}/>
                            <label htmlFor="3">Economias Circulares</label>
                        </div>
                        
                        <div>
                            <input type="radio"  id="4" onChange={handleRadioChange} checked={selectedFilter === "4"}/>
                            <label htmlFor="4">Ciencia aplicada</label>
                        </div>

                        <div>
                            <input type="radio" id="5" onChange={handleRadioChange} checked={selectedFilter === "5"}/>
                            <label htmlFor="5">Otros</label>

                        </div>

                      
                </div>

                
                
                <div className="container-project">
                    {filteredProjects.length > 0 ? (
                            
                            filteredProjects.map((item) => <CardProject key={item.id} project={item} cart={cart}/>)
                        
                        ) : (
                        <div className="col-12">
                            <h2 className="text-center">
                                No se encontraron proyectos acorde a su busqueda 
                            </h2>
                        </div>
                        
                    )}
                </div>
               
                
                
            </div>
        </div>

        </>
    )
}

export default Projects;

