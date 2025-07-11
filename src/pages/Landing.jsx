import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Project from "../components/projects/Projects"
import { Main } from '../components/main/Main';

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
                <Project />
                <Footer />
        </>
    )
}

export default Landing