import UserNavbar from "../components/UserNavbar";
import UserFooter from "../components/Footer";
import "./staticpages.css";

function Gallery() {


    const images = [

        {
            image:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
            title:"Wedding Events"
        },

        {
            image:"https://images.unsplash.com/photo-1507504031003-b417219a0fde",
            title:"Birthday Celebrations"
        },

        {
            image:"https://images.unsplash.com/photo-1519225421980-715cb0215aed",
            title:"Corporate Functions"
        },

        {
            image:"https://images.unsplash.com/photo-1555244162-803834f70033",
            title:"Catering Setup"
        },

        {
            image:"https://images.unsplash.com/photo-1505236858219-8359eb29e329",
            title:"Special Occasions"
        },

        {
            image:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
            title:"Beautiful Decorations"
        }

    ];



    return (

        <div className="static-page">


            <UserNavbar />



            {/* Gallery Hero */}

            <section className="gallery-hero">


                <div>

                    <h1>
                        Our Event Gallery
                    </h1>


                    <p>
                        Explore our beautiful catering setups
                        and memorable events.
                    </p>

                </div>


            </section>





            <div className="content-box">


                <h1>
                    Memories We Created
                </h1>


                <p>
                    Take a look at our previous events,
                    professional setups, and quality services.
                </p>




                <div className="gallery">


                    {
                        images.map((item,index)=>(


                            <div 
                                className="gallery-card"
                                key={index}
                            >


                                <img

                                    src={item.image}

                                    alt={item.title}

                                />



                                <div className="gallery-overlay">

                                    <h2>
                                        {item.title}
                                    </h2>

                                </div>


                            </div>


                        ))
                    }


                </div>




            </div>



            <UserFooter />



        </div>

    );

}


export default Gallery;