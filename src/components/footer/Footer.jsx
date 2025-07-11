import "./Footer.css";

const Footer = () => {
    return (
        <footer className="container" id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="footer__title">Redes sociales</div>
            <div className="footer__info">
                <div className="footer__item">
                    <p className="footer__subtitle">WhatsApp:</p>
                    <i className="fa-brands fa-whatsapp"></i>
                    <p className="footer__number">
                        <a href="https://api.whatsapp.com/send?phone=+0995644186&text=Deseo%20más%20información" target="_blank" className="link">
                            +593-963267963
                        </a>
                    </p>
                </div>
                <div className="footer__item">
                    <p className="footer__subtitle">Escríbenos por correo:</p>
                    <i className="fa-regular fa-envelope"></i>
                    <p className="footer__mail">vibe-u@epn.edu.ec</p>
                </div>
            </div>
            <p className="footer__copy">Derechos reservados &copy; Grupo1</p>
        </footer>
    )
}

export default Footer