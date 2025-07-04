import './Projects.css';

import vibeuImg from '../../assets/logo-vibe-u.png'; // Asegúrate de tener esta imagen en tu carpeta assets

const Projects = () => {
    return (
        <section className="project" id="portfolio">
            <h3 className="project__title">Proyectos</h3>
            <p className="project__intro">Aquí se listarán los proyectos desarrollados por el grupo.</p>
            <div className="project__cards">
                <div className="cards">
                    <img src={vibeuImg} className="card__img" alt="Proyecto Vibe-U" />
                    <div className="card">
                        <h4 className="card__title">Vibe-U</h4>
                        <p className="card__description">Plataforma que pone a la universidad en modo social.</p>
                        <div className="card__buttons">
                            <a href="https://github.com/Kyara2005/Vibe-U" target="_blank" className="card__category">Repository</a>
                            <a href="https://vibe-u.netlify.app/" target="_blank" className="card__category">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
