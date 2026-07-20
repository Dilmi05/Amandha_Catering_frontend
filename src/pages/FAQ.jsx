import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import "./staticpages.css";

function FAQ() {

    return (

        <div className="static-page">


            <UserNavbar />



            <div className="content-box">



                <h1>
                    Frequently Asked Questions
                </h1>





                <h3>
                    How can I book items?
                </h3>


                <p>
                    Select items, add them to cart,
                    and complete payment.
                </p>





                <h3>
                    How early should I book?
                </h3>


                <p>
                    We recommend booking at least one week
                    before your event.
                </p>





                <h3>
                    Do you provide delivery?
                </h3>


                <p>
                    Yes, we provide delivery services.
                </p>




            </div>





            <Footer />



        </div>

    );

}

export default FAQ;