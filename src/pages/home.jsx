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

        <div className="home">

            {/* Navbar */}
            <UserNavbar />

            {/* Items */}

            <div className="item-container">

                {items.map((item) => (

                    <div
                        className="item-card"
                        key={item.itemId}
                    >

                        <img
                            src="https://images.unsplash.com/photo-1547592180-85f173990554"
                            alt={item.itemName}
                        />

                        <h2>{item.itemName}</h2>

                        <p>{item.description}</p>

                        <p>
                            <strong>Category:</strong> {item.category}
                        </p>

                        <p>
                            <strong>Status:</strong>{" "}
                            {item.available ? "Available" : "Not Available"}
                        </p>

                        <p>
                            <strong>Price:</strong> Rs. {item.price}
                        </p>

                        <button
                            className="book-btn"
                            disabled={!item.available}
                            onClick={() => addToCart(item)}
                        >
                            {item.available ? "Book Now" : "Not Available"}
                        </button>

                    </div>

                ))}

            </div>

            {/* Checkout Button */}

            <div className="bottom-checkout">

                <button
                    className="checkout-btn"
                    onClick={() => navigate("/cart")}
                >
                    Checkout Cart ({cart.length})
                </button>

            </div>

            {/* Footer */}

            <Footer />

        </div>

    );

}

export default Home;