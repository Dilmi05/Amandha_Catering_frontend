import { Link } from "react-router-dom";
import "./usernavbar.css";

function UserNavbar() {

    return (

        <nav className="user-navbar">

            <div className="logo">
                <h2>Amandha Catering Rentals</h2>
            </div>


            <div className="nav-links">

                <Link to="/home">
                    Home
                </Link>

                <Link to="/cart">
                    Cart
                </Link>

                <Link to="/payment">
                    Payment
                </Link>

                <Link to="/myorders">
                    My Orders
                </Link>

            </div>


        </nav>

    );

}

export default UserNavbar;