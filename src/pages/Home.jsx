import './css/home.css';
import Aos from 'aos';
Aos.init();
const home = () => {
    window.scrollTo(0, 0);
    return (
    <div>
        <div className='container'>
            <div className='container-form'>   
                <div className='title'>
                    <h1 data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >Ayuda a cambiar el mundo</h1>
                    <p data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Invierte en proyectos comprando toneladas de CO2 y restaurar la naturaleza.</p>
                </div> 
            </div>
            <div className='container-img'>
                <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt=""/>
            </div>
        </div>
            <div className='container-news'>
                <h2 className='h2 '>Noticias</h2>
                <div className='container-cards' 
                      data-aos="fade-up"
                      data-aos-duration="1000">
                    <div className='newsItem'>
                        <img className='cartImg' src='https://verra.org/wp-content/uploads/2023/07/Darkwoods-Forest-Carbon-Project-607-Gordon-MacPherson-on-behalf-of-Nature-Conservancy-of-Canada-Canada-Forest-in-summer-1024x681.jpg'/>
                        <div className='container-text-news'>
                            <p>We avoid the deforestation of more than 50 thousand hectares.</p>
                            <p className='fecha'>April 3, 2023</p>
                        </div>
                        
                    </div>
                    <div className='newsItem'>
                        <img className='cartImg' src='https://verra.org/wp-content/uploads/2023/07/andrew-coelho-unsplash.jpg'/>
                        <div className='container-text-news'>
                            <p>Find out about our new way of investing in the projects we have to offer you.</p>
                            <p className='fecha'>September 20, 2023</p>
                        </div>
                    </div>
                    <div className='newsItem'>
                        <img className='cartImg' src='https://verra.org/wp-content/uploads/2023/08/Photo-by-Paul-Vincent--scaled.jpg'/>
                        <div className='container-text-news'>
                            <p>We are working on a mobile application so you can help us help.</p>
                            <p className='fecha'>October 16, 2023</p>
                        </div>
                    </div>
                    <div className='newsItem'>
                        <img className='cartImg' src='https://verra.org/wp-content/uploads/imported/news/river-and-forest-jpg-scaled.jpg'/>
                        <div className='container-text-news'>
                            <p>More 100 clean rivers.</p>
                            <p className='fecha'>October 1, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-news'>
                <h2 className='h2'>Eventos</h2>

                <div className='container-cards' 
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    
                    <div className='newsItem'>
                        <img className='cartImg' src='https://media.admagazine.com/photos/644b88b2154ed7b822040126/16:9/w_1920,c_limit/plantas-con-flores.jpg'/>
                       <div className='container-text-news'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='newsItem'>
                        <img className='cartImg' src='https://media.admagazine.com/photos/644b88b2154ed7b822040126/16:9/w_1920,c_limit/plantas-con-flores.jpg'/>
                       <div className='container-text-news'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='newsItem'>
                        <img className='cartImg' src='https://media.admagazine.com/photos/644b88b2154ed7b822040126/16:9/w_1920,c_limit/plantas-con-flores.jpg'/>
                       <div className='container-text-news'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='newsItem'>
                        <img className='cartImg' src='https://media.admagazine.com/photos/644b88b2154ed7b822040126/16:9/w_1920,c_limit/plantas-con-flores.jpg'/>
                       <div className='container-text-news'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>
            </div>

        <div className='aboutUs'>
            <img data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className='company' 
                src='https://www.treehugger.com/thmb/EGzzG6k9lB-wXQwW_f1e8uQzTkw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-907686588-0103ab828f954ffba31c8153745dd27e.jpg'
            />
            
            <div className='companyInfo' 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">

                <h2  className='h2'>Sobre nosotros</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum 
                    natus consectetur iusto quaerat voluptatibus veniam doloribus suscipit, eaque cumque
                     nam doloremque magnam officiis harum officia optio aspernatur. Deserunt, fugit?Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Accusamus quisquam, voluptates dignissimos neque
                       unde dolor quod nisi eveniet omnis illo
                     obcaecati inventore quibusdam distinctio soluta. Sapiente molestiae quos recusandae minima!</p>
            </div>
        </div>

        <div className='projectsContainer'>
            <h2 className='h2'>Proyectos en los que puede invertir</h2>

            <div className='projectsMain'
                  data-aos="fade-up"
                  data-aos-duration="1000">  
                    <div className='project'>
                        <img className='project-img' src="https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540"/>
                        <h3 className='projectTitle'>Project Title</h3>
                        <p className='projectDescription'>Short Description</p>
                    </div>

                    <div className='project'>
                        <img className='project-img' src="https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/worcestershire-herefordshire/places/clent-hills/library/autumn/beech-tree-clent-hills-worcestershire-1591489.jpg?auto=webp&width=1440&crop=16:7&dpr=1"/>
                        <h3 className='projectTitle'>Project Title</h3>
                        <p className='projectDescription'>Short Description</p>
                    </div>
                
                    <div className='project'>
                        <img className='project-img' src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-768x511.jpg"/>
                        <h3 className='projectTitle'>Project Title</h3>
                        <p className='projectDescription'>Short Description</p>
                    </div>

                    <div className='project'>
                        <img className='project-img' src="https://www.treehugger.com/thmb/2kYXj4KXChrqntcrQ_Xks0qIcLw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8860298334_509c5f9698_o-2fba9e1a26cc465bb9d4f9b659b2296d.jpg"/>
                        <h3 className='projectTitle'>Project Title</h3>
                        <p className='projectDescription' >Short Description</p>
                    </div>
            </div>
        </div>
    </div>)
}

export default home;