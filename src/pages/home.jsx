import "./home.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/cartcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

function Home() {

    const { addToCart, cart } = useContext(CartContext);

    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:8080/api/items")
            .then((response) => {

                setItems(response.data);

            })
            .catch((error) => {

                console.log("Error loading items:", error);

            });

    }, []);

    return (

        <div
            className="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >

            {/* Navbar */}
            <UserNavbar />

            {/* Page Content */}
            <div
                className="page-content"
                style={{
                    flex: 1,
                    paddingTop: "25px",
                    paddingBottom: "35px"
                }}
            >

                <div className="item-container">

                    {

                        items.map((item) => (

                            <div
                                className="item-card"
                                key={item.itemId}
                            >

                                <img
                                    src={
                                        item.image
                                            ? item.image
                                            : "https://images.unsplash.com/photo-1547592180-85f173990554"
                                    }
                                    alt={item.itemName}
                                />

                                <div className="item-card-content">

                                    <h2>{item.itemName}</h2>

                                    <p>{item.description}</p>

                                    <p>
                                        <strong>Category:</strong> {item.category}
                                    </p>

                                    <p>
                                        <strong>Status:</strong>{" "}
                                        {item.available
                                            ? "Available"
                                            : "Not Available"}
                                    </p>

                                    <h3>Rs. {item.price}</h3>

                                    <button
                                        className="book-btn"
                                        disabled={!item.available}
                                        onClick={() => addToCart(item)}
                                    >
                                        {item.available
                                            ? "Book Now"
                                            : "Not Available"}
                                    </button>

                                </div>

                            </div>

                        ))

                    }

                </div>

                <div className="bottom-checkout">

                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/cart")}
                    >
                        Checkout Cart ({cart.length})
                    </button>

                </div>

            </div>

            {/* Footer */}
            <Footer />

        </div>

    );

}

export default Home;