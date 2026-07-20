import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import "./staticpages.css";

function Contact() {

    return (

        <div className="static-page">


            <UserNavbar />



            <div className="content-box contact-box">



                <h1>
                    Contact Us
                </h1>



                <p className="contact-intro">

                    We are here to help you make your event
                    successful. Contact Amandha Catering Rentals
                    for bookings and inquiries.

                </p>





                <div className="contact-cards">



                    <div className="contact-card">


                        <h2>
                            📞 Phone
                        </h2>


                        <p>
                            07X XXX XXXX
                        </p>


                    </div>





                    <div className="contact-card">


                        <h2>
                            📧 Email
                        </h2>


                        <p>
                            amandharentals@gmail.com
                        </p>


                    </div>





                    <div className="contact-card">


                        <h2>
                            📍 Location
                        </h2>


                        <p>
                            Sri Lanka
                        </p>


                    </div>



                </div>







                <div className="contact-form">



                    <h2>
                        Send Message 💬
                    </h2>





                    <input
                        type="text"
                        placeholder="Your Name"
                    />





                    <input
                        type="email"
                        placeholder="Your Email"
                    />





                    <textarea

                        placeholder="Write your message..."

                        rows="5"

                    />





                    <button>

                        Submit Message

                    </button>




                </div>




            </div>





            <Footer />



        </div>

    );

}


export default Contact;