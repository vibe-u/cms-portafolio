import './Header.css';
import { Link } from "react-router";


const Header = () => {
    return (

        <header>
            <nav class="navbar__container">
                <p class="navbar__logo">Grupo 1</p>
                <ul class="navbar__menu">
                    <li><a href="#navbar">Inicio</a></li>
                    <li><a href="#about">Sobre nosotros</a></li>
                    <li><a href="#portfolio">Proyectos</a></li>
                    <li><Link to="/habilidades">Habilidades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>                   
                    <li><Link to="/login">Ingresar</Link></li>
                    <li><Link to="/register">Registrarse</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header