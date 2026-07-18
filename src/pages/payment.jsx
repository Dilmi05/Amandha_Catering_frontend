import { useState, useContext } from "react";
import { CartContext } from "../pages/cartcontext";
import "./payment.css";

function Payment() {

    const { cart } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
            0);
    const [paymentMethod, setPaymentMethod] = useState("");

    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        eventDate: "",
        eventTime: ""
    });

    const [card, setCard] = useState({
        holder: "",
        number: "",
        expiry: "",
        cvv: ""
    });

    const handleCustomerChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const handleCardChange = (e) => {
        setCard({
            ...card,
            [e.target.name]: e.target.value
        });
    };

    const placeOrder = () => {

        alert("Your Catering Order has been placed successfully!");

    };

    const payNow = () => {

        alert("Payment Successful!");

    };

    return (

        <div className="payment-container">

            <div className="payment-card">

                <h1>Catering Payment</h1>

                <h2>Customer Information</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={customer.name}
                    onChange={handleCustomerChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={customer.phone}
                    onChange={handleCustomerChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={customer.email}
                    onChange={handleCustomerChange}
                />

                <textarea
                    name="address"
                    placeholder="Delivery Address"
                    rows="4"
                    value={customer.address}
                    onChange={handleCustomerChange}
                />

                <label>Event Date</label>

                <input
                    type="date"
                    name="eventDate"
                    value={customer.eventDate}
                    onChange={handleCustomerChange}
                />

                <label>Event Time</label>

                <input
                    type="time"
                    name="eventTime"
                    value={customer.eventTime}
                    onChange={handleCustomerChange}
                />

                <div className="summary">

                    <h2>Order Summary</h2>

                    <h3>Total Amount : Rs. {total}</h3>

                </div>

                <h2>Select Payment Method</h2>

                <div className="payment-option">

                    <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="Cash"
                        checked={paymentMethod === "Cash"}
                        onChange={(e)=>setPaymentMethod(e.target.value)}
                    />

                    <label htmlFor="cash">
                        Cash on Delivery
                    </label>

                </div>

                <div className="payment-option">

                    <input
                        type="radio"
                        id="online"
                        name="payment"
                        value="Online"
                        checked={paymentMethod === "Online"}
                        onChange={(e)=>setPaymentMethod(e.target.value)}
                    />

                    <label htmlFor="online">
                        Online Payment
                    </label>

                </div>

                {paymentMethod === "Cash" && (

                    <div className="cash-box">

                        <h2>Delivery Information</h2>

                        <p><strong>Name :</strong> {customer.name}</p>

                        <p><strong>Phone :</strong> {customer.phone}</p>

                        <p><strong>Email :</strong> {customer.email}</p>

                        <p><strong>Address :</strong> {customer.address}</p>

                        <p><strong>Event Date :</strong> {customer.eventDate}</p>

                        <p><strong>Event Time :</strong> {customer.eventTime}</p>

                        <h3>Total : Rs. {total}</h3>

                        <button onClick={placeOrder}>
                            Place Order
                        </button>

                    </div>

                )}

                {paymentMethod === "Online" && (

                    <div className="online-box">

                        <h2>Card Details</h2>

                        <input
                            type="text"
                            name="holder"
                            placeholder="Card Holder Name"
                            value={card.holder}
                            onChange={handleCardChange}
                        />

                        <input
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            value={card.number}
                            onChange={handleCardChange}
                        />

                        <div className="card-row">

                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                value={card.expiry}
                                onChange={handleCardChange}
                            />

                            <input
                                type="password"
                                name="cvv"
                                placeholder="CVV"
                                value={card.cvv}
                                onChange={handleCardChange}
                            />

                        </div>

                        <h3>Total : Rs. {total}</h3>

                        <button onClick={payNow}>
                            Pay Now
                        </button>

                    </div>

                )}

            </div>

        </div>

    );

}

export default Payment;