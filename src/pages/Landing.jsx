import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Project from "../components/projects/Projects"
import Home from "../components/Home"
import { Main } from '../components/main/Main';
import Memes from '../characters/Characters';
const Landing = () => {
    return (
        <>
            <div data-aos="fade-down">
                <Header />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500">
                <Main />
            </div>
                <About />
                <Home />
                <Project />
            <div data-aos="fade-down" data-aos-duration="1000">
                <Memes />
            </div>
            <Footer />
        </>
    )
}

export default Landing