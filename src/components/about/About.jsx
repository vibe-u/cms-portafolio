import './About.css';
import grupo from '../../assets/grupo-chicos.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="about__title">Sobre el grupo</h2>
                <p className="about__paragraph" data-aos="fade-up" data-aos-delay="300">
                    Somos un equipo multidisciplinario enfocado en la creación de soluciones tecnológicas innovadoras.
                </p>
                <p className="about__paragraph" data-aos="fade-up" data-aos-delay="400">
                    Nuestra misión es impulsar el desarrollo digital con herramientas creativas que conecten a las personas. Nos especializamos en el diseño de aplicaciones web centradas en mejorar la experiencia social y académica.
                </p>
                <p className="about__paragraph" data-aos="fade-up" data-aos-delay="500">
                    Creemos en la innovación, el trabajo en equipo y el impacto positivo de la tecnología.
                </p>
                <a href="#" className="btn btn__light">Ver más</a>
            </div>

            <figure className="about__figure" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <img src={grupo} className="about__picture" alt="grupo-code" />
            </figure>
        </section>
    );
};

export default About;
