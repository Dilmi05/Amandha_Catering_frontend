import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import "./staticpages.css";

function Terms() {

    return (

        <div className="static-page">


            <UserNavbar />



            <div className="content-box terms-box">


                <h1>
                    Terms & Conditions
                </h1>



                <p className="terms-intro">

                    Please read our terms carefully before
                    booking Amandha Catering Rentals services.
                    We want to provide a safe and reliable
                    rental experience for every customer.

                </p>





                <div className="terms-card">


                    <h2>
                        📦 Equipment Responsibility
                    </h2>


                    <p>

                        Customers must return all rented items
                        in the same condition as received.

                    </p>


                </div>





                <div className="terms-card">


                    <h2>
                        ⚠️ Damaged Items
                    </h2>


                    <p>

                        Any damaged, lost, or missing equipment
                        may require additional charges based on
                        the item condition.

                    </p>


                </div>





                <div className="terms-card">


                    <h2>
                        ❌ Cancellation Policy
                    </h2>


                    <p>

                        Orders can be cancelled according to
                        our cancellation policy. Please contact
                        us early for any changes.

                    </p>


                </div>





                <div className="terms-card">


                    <h2>
                        💳 Payment Rules
                    </h2>


                    <p>

                        Customers must complete payment details
                        before confirming their rental booking.

                    </p>


                </div>




            </div>




            <Footer />


        </div>

    );

}


export default Terms;