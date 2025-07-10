import './About.css';
import girl from '../../assets/girl.svg'; // le subes la imagen tu

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content">
                <h2 className="about__title">Sobre el grupo</h2>
                <p className="about__paragraph">
                    Somos un equipo multidisciplinario enfocado en la creación de soluciones tecnológicas innovadoras.
                </p>
                <p className="about__paragraph">
                    Nuestra misión es impulsar el desarrollo digital con herramientas creativas que conecten a las personas. Nos especializamos en el diseño de aplicaciones web centradas en mejorar la experiencia social y académica.
                </p>
                <p className="about__paragraph">
                    Creemos en la innovación, el trabajo en equipo y el impacto positivo de la tecnología.
                </p>
                <a href="#" className="btn btn__light">Ver más</a>
            </div>

            <figure className="about__figure">
                <img src={girl} className="about__picture" alt="chica-code" />
            </figure>
        </section>
    );
};

export default About;
