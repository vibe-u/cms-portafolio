import { Main } from '../main/Main';
import './Header.css';

const Header = () => {
    return (

        <header>
            <nav class="navbar__container">
                <p class="navbar__logo">Grupo 1</p>
                <ul class="navbar__menu">
                    <li><a href="#navbar">Inicio</a></li>
                    <li><a href="#bout">Sobre nosotros</a></li>
                    <li><a href="#portfolio">Proyectos</a></li>
                    <li><a href="#expert">Habilidades</a></li>
                    <li><a href="#contact">Contactos</a></li>
                </ul>
            </nav>
            <Main />
        </header>

    )
}

export default Header