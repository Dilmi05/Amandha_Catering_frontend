import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../pages/cartcontext";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import "./home.css";

function Cart() {

    const navigate = useNavigate();

    const {
        cart,
        increase,
        decrease,
        removeItem
    } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) =>
            sum + Number(item.price) * Number(item.quantity),
        0
    );

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
                    paddingBottom: "40px"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "30px",
                        color: "#2563eb"
                    }}
                >
                    Your Cart
                </h1>

                {

                    cart.length === 0 ? (

                        <div
                            className="empty-cart"
                            style={{
                                minHeight: "50vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >

                            <h2
                                style={{
                                    marginBottom: "20px"
                                }}
                            >
                                Your Cart is Empty
                            </h2>

                            <Link to="/home">

                                <button className="continue-btn">

                                    Continue Shopping

                                </button>

                            </Link>

                        </div>

                    ) : (

                        <>

                            {

                                cart.map((item) => (

                                    <div
                                        className="cart-item"
                                        key={item.itemId}
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.itemName}
                                        />

                                        <div className="cart-details">

                                            <h2>{item.itemName}</h2>

                                            <p>
                                                Price : Rs. {item.price}
                                            </p>

                                            <div className="quantity">

                                                <button
                                                    onClick={() =>
                                                        decrease(item.itemId)
                                                    }
                                                >
                                                    -
                                                </button>

                                                <span>
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increase(item.itemId)
                                                    }
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <p>

                                                <strong>

                                                    Sub Total : Rs.{" "}

                                                    {Number(item.price) *
                                                        Number(item.quantity)}

                                                </strong>

                                            </p>

                                            <button
                                                className="remove-btn"
                                                onClick={() =>
                                                    removeItem(item.itemId)
                                                }
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                ))

                            }

                            <hr />

                            <h2
                                className="total"
                                style={{
                                    textAlign: "center"
                                }}
                            >
                                Total Amount : Rs. {total}
                            </h2>

                            <div className="cart-buttons">

                                <Link to="/home">

                                    <button className="continue-btn">

                                        Continue Shopping

                                    </button>

                                </Link>

                                <button
                                    className="checkout-btn"
                                    onClick={() =>
                                        navigate("/payment")
                                    }
                                >
                                    Checkout
                                </button>

                            </div>

                        </>

                    )

                }

            </div>

            {/* Footer */}

            <Footer />

        </div>

    );

}

export default Cart;