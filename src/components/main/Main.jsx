import './Main.css';

export const Main = () => {
    return (
        <main className='principal'>
            <h1 className='principal__title'>Bienvenido al portafolio grupal</h1>
            <p className='principal__description'>Somos un grupo apasionado por la tecnología y el desarrollo de software, comprometidos con aprender y aplicar buenas prácticas para crear aplicaciones útiles y fáciles de mantener. Nos gusta trabajar en equipo, explorar nuevas herramientas y aportar a proyectos que generen impacto real.</p>
            <a href="#portfolio" className="btn btn__light">Hoja de vida</a>
        </main>
    );
};