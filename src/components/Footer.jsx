import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {

    return (

        <footer className="footer">

            <h2>
                Amandha Catering Rentals
            </h2>


            <div className="footer-links">

                <Link to="/about">
                    About
                </Link>

                <Link to="/services">
                    Services
                </Link>

                <Link to="/gallery">
                    Gallery
                </Link>

                <Link to="/faq">
                    FAQ
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

                <Link to="/terms">
                    Terms
                </Link>

                <Link to="/profile">
                    Profile
                </Link>

            </div>


            <p>
                © 2026 Amandha Catering Rentals. All Rights Reserved.
            </p>


        </footer>

    );

}

export default Footer;