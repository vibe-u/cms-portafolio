import "./Footer.css";

const Footer = () => {
    return (

        <footer className="container" id="contact">

            <div className="footer">
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