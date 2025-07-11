import "./Footer.css";

const Footer = () => {
    return (

        <footer className="container" id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">

            <div className="footer" data-aos="fade-right" data-aos-delay="200">
                <h2 className="footer__title">Contáctame</h2>
                <div className="footer__icons">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-x-twitter"></a>
                    <a href="#" className="fab fa-github"></a>
                    <a href="#" className="fab fa-whatsapp"></a>
                </div>
                <p className="footer__copy">Derechos reservados &copy; Grupo1</p>
            </div>
        </footer>

    )
}

export default Footer