import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import "./staticpages.css";

function Profile() {


    const user =
        JSON.parse(localStorage.getItem("user")) || {};



    return (


        <div className="static-page">



            <UserNavbar />




            <div className="content-box profile-box">



                <div className="profile-header">



                    <div className="profile-icon">

                        👤

                    </div>



                    <h1>
                        My Profile
                    </h1>



                    <p>

                        Manage your Amandha Catering Rentals account

                    </p>



                </div>







                <div className="profile-card">





                    <div className="profile-detail">



                        <h3>
                            👤 Full Name
                        </h3>



                        <p>
                            {user.name || "Not Available"}
                        </p>



                    </div>







                    <div className="profile-detail">



                        <h3>
                            📧 Email Address
                        </h3>



                        <p>
                            {user.email || "Not Available"}
                        </p>



                    </div>







                    <div className="profile-detail">



                        <h3>
                            🔐 Account Type
                        </h3>



                        <p>
                            {user.role || "Customer"}
                        </p>



                    </div>





                </div>







                <button className="profile-btn">


                    ✏️ Edit Profile


                </button>





            </div>






            <Footer />





        </div>


    );

}


export default Profile;