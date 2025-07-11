import './Projects.css';

import vibeuImg from '../../assets/logo-vibe-u.png'; 

const Projects = () => {
    return (
        <section className="project" id="portfolio" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <h3 className="project__title">Proyectos</h3>
            <p className="project__intro" data-aos="fade-up" data-aos-delay="300">Aquí se listarán los proyectos desarrollados por el grupo.</p>
            <div className="project__cards" data-aos="fade-down" data-aos-duration="500">
                <div className="cards" data-aos="fade-up" data-aos-duration="1000">
                    <img src={vibeuImg} className="card__img" alt="Proyecto Vibe-U" />
                    <div className="card">
                        <h4 className="card__title">Vibe-U</h4>
                        <p className="card__description">Plataforma que pone a la universidad en modo social.</p>
                        <div className="card__buttons">
                            <a href="https://github.com/Kyara2005/Vibe_U-landing_page.git" target="_blank" className="card__category">Repositorio</a>
                            <a href="https://vibe-u.netlify.app/" target="_blank" className="card__category">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
