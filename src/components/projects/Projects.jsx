import './Projects.css';
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import vibeuImg from '../../assets/logo-vibe-u.png'; 

const client = createClient({
    space: 'aqcec86myqav',
    accessToken: 'VV5yDYj1SkYCV6Zj0v9j7uAo8cGmt5FnUSY7APpFQMs'
});

const Projects = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'proyecto' }).then((res) => {
            setProyectos(res.items);
        });
    }, []);

    return (
        <section className="project" id="portfolio" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <h3 className="project__title">Proyectos</h3>
            <p className="project__intro" data-aos="fade-up" data-aos-delay="300">Aquí se listarán los proyectos desarrollados por el grupo.</p>

            <div className="project__cards" data-aos="fade-down" data-aos-duration="500">
                {/* Proyecto fijo */}
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

                {/* Proyectos de Contentful */}
                {proyectos.map((item) => {
                    const { titulo, descripcion, imagen1, links, urlDemo } = item.fields;
                    const imageUrl = imagen1?.fields?.file?.url;

                    return (
                        <div className="cards" key={item.sys.id} data-aos="fade-up" data-aos-duration="1000">
                            {imageUrl && <img src={`https:${imageUrl}`} className="card__img" alt={titulo} />}
                            <div className="card">
                                <h4 className="card__title">{titulo}</h4>
                                <p className="card__description">{descripcion}</p>
                                <div className="card__buttons">
                                    {links && <a href={links} target="_blank" className="card__category">Repositorio</a>}
                                    {urlDemo && <a href={urlDemo} target="_blank" className="card__category">Demo</a>}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;

