import UserNavbar from "../components/UserNavbar";
import UserFooter from "../components/Footer";
import "./staticpages.css";

function Services() {

    return (

        <div className="static-page">

            <UserNavbar />


            {/* Hero Section */}

            <section className="services-hero">

                <div className="services-hero-content">

                    <h1>
                        Our Services
                    </h1>

                    <p>
                        Complete catering rental solutions to make
                        your special events successful and memorable.
                    </p>

                </div>

            </section>




            <div className="content-box">


                <h1>
                    What We Provide
                </h1>


                <p>
                    From small gatherings to large celebrations,
                    Amandha Catering Rentals provides everything
                    you need for a perfect event.
                </p>




                <div className="services-container">



                    <div className="service-card">


                        <div className="service-icon">
                            🍽️
                        </div>


                        <h2>
                            Catering Equipment Rental
                        </h2>


                        <p>
                            We provide high-quality plates,
                            chairs, tables, glasses, and other
                            catering equipment for your events.
                        </p>


                        <button>
                            View Items
                        </button>


                    </div>





                    <div className="service-card">


                        <div className="service-icon">
                            🎉
                        </div>


                        <h2>
                            Event Solutions
                        </h2>


                        <p>
                            Complete equipment solutions for
                            weddings, birthday parties,
                            corporate events, and celebrations.
                        </p>


                        <button>
                            Plan Event
                        </button>


                    </div>





                    <div className="service-card">


                        <div className="service-icon">
                            🚚
                        </div>


                        <h2>
                            Fast Delivery Service
                        </h2>


                        <p>
                            Reliable and timely delivery service
                            to make your event preparation easier.
                        </p>


                        <button>
                            Contact Us
                        </button>


                    </div>



                </div>





                <div className="service-highlight">


                    <h2>
                        Why Choose Us?
                    </h2>


                    <div className="highlight-items">


                        <div>
                            ⭐ Quality Equipment
                        </div>


                        <div>
                            ⚡ Quick Service
                        </div>


                        <div>
                            💰 Affordable Prices
                        </div>


                        <div>
                            🤝 Customer Support
                        </div>


                    </div>


                </div>




            </div>


            <UserFooter />


        </div>

    );

}


export default Services;