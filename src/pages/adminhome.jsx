import { Link, useNavigate } from "react-router-dom";
import "./adminhome.css";


function AdminHome() {


    const navigate = useNavigate();



    // Logout function
    const logout = () => {

        // remove saved user data
        localStorage.removeItem("user");


        // go to login page
        navigate("/login");

    };



    return (

        <div className="admin-container">


            <div className="admin-header">


                <div>

                    <h1>
                        Welcome, Admin 👑
                    </h1>


                    <p>
                        Manage Amandha Renters Catering System
                    </p>

                </div>





                <div className="header-buttons">


                    <button
                        className="customer-btn"
                        onClick={() => navigate("/home")}
                    >

                        Customer Home

                    </button>





                    <button
                        className="logout-btn"
                        onClick={logout}
                    >

                        Logout

                    </button>


                </div>


            </div>







            <div className="dashboard-content">


                <h2>
                    Admin Dashboard
                </h2>





                <div className="cards">






                    <div className="card">


                        <div className="icon">
                            📦
                        </div>



                        <h3>
                            Manage Items
                        </h3>



                        <p>
                            Add, update and delete catering items.
                        </p>




                        <Link to="/admin/items">

                            <button>
                                Manage Items
                            </button>

                        </Link>



                    </div>









                    <div className="card">


                        <div className="icon">
                            🛒
                        </div>



                        <h3>
                            Orders
                        </h3>




                        <p>
                            View and manage customer orders.
                        </p>





                        <Link to="/admin/orders">


                            <button>
                                View Orders
                            </button>


                        </Link>



                    </div>









                    <div className="card">


                        <div className="icon">
                            👥
                        </div>



                        <h3>
                            Users
                        </h3>




                        <p>
                            Manage customer accounts.
                        </p>




                        <Link to="/admin/users">


                            <button>
                                Manage Users
                            </button>


                        </Link>



                    </div>









                    <div className="card">


                        <div className="icon">
                            🏠
                        </div>



                        <h3>
                            Customer Website
                        </h3>




                        <p>
                            Check the customer side of the system.
                        </p>





                        <button
                            onClick={() => navigate("/home")}
                        >

                            Open Home

                        </button>




                    </div>





                </div>



            </div>





        </div>

    );

}


export default AdminHome;