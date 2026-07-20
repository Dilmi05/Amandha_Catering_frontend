import { Link, useNavigate } from "react-router-dom";
import "./usernavbar.css";

function UserNavbar() {

    const navigate = useNavigate();


    const logout = () => {

        localStorage.removeItem("user");

        navigate("/login");

    };


    return (

        <nav className="user-navbar">


            <div className="logo">

                <h2>
                    🍽 Amandha Catering Rentals
                </h2>

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



                <button 
                    className="logout-btn"
                    onClick={logout}
                >

                    🚪 Logout

                </button>



            </div>



        </nav>

    );

}


export default UserNavbar;