import UserNavbar from "../components/UserNavbar";
import UserFooter from "../components/Footer";
import "./staticpages.css";

function About() {

    return (

        <div className="static-page">

            <UserNavbar />


            {/* Hero Section */}

            <section className="about-hero">

                <div className="hero-content">

                    <h1>
                        About Amandha Catering Rentals
                    </h1>

                    <p>
                        Creating unforgettable events with premium
                        catering equipment and professional service.
                    </p>


                    <button>
                        Explore Our Services
                    </button>

                </div>


            </section>



            {/* About Content */}

            <div className="content-box">


                <h1>
                    Who We Are
                </h1>


                <p>
                    Welcome to <strong>Amandha Catering Rentals</strong>,
                    your trusted partner for event equipment solutions.
                    We provide high-quality catering items for weddings,
                    birthday parties, corporate functions, and special events.
                </p>



                <p>
                    With reliable service and affordable rental packages,
                    we help customers create beautiful and successful events
                    without worrying about equipment arrangements.
                </p>



                {/* Feature Cards */}


                <div className="about-cards">


                    <div className="about-card">

                        <div className="icon">
                            🍽️
                        </div>

                        <h2>
                            Quality Equipment
                        </h2>

                        <p>
                            Premium catering items maintained with
                            excellent quality standards.
                        </p>

                    </div>





                    <div className="about-card">

                        <div className="icon">
                            🚚
                        </div>

                        <h2>
                            Reliable Delivery
                        </h2>

                        <p>
                            On-time delivery service to make your
                            event planning easier.
                        </p>

                    </div>





                    <div className="about-card">

                        <div className="icon">
                            💰
                        </div>

                        <h2>
                            Affordable Prices
                        </h2>

                        <p>
                            Budget-friendly rental solutions for
                            every type of event.
                        </p>

                    </div>



                </div>




                {/* Mission Section */}

                <div className="mission-box">


                    <h2>
                        Our Mission
                    </h2>


                    <p>
                        Our mission is to provide convenient,
                        affordable, and professional catering rental
                        services while helping customers create
                        memorable experiences.
                    </p>


                </div>



            </div>



            <UserFooter />


        </div>

    );

}


export default About;