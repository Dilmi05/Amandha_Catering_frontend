import { useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../pages/cartcontext";
import "./payment.css";


function Payment() {


    const { cart, clearCart } = useContext(CartContext);



    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );



    const [paymentMethod, setPaymentMethod] = useState("");



    const [customer, setCustomer] = useState({

        customerId: 1,
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





    const handleCustomerChange = (e)=>{


        setCustomer({

            ...customer,

            [e.target.name]:e.target.value

        });


    };







    const handleCardChange=(e)=>{


        setCard({

            ...card,

            [e.target.name]:e.target.value

        });


    };









    const createOrder = async()=>{


        try{


            // 1. Save order

            const orderResponse = await axios.post(

                "http://localhost:8080/api/orders",

                {

                    customerId: customer.customerId,

                    eventDate: customer.eventDate,

                    totalAmount: total

                }

            );



            const orderId = orderResponse.data.orderId;





            // 2. Save ordered items

            for(let item of cart){


                await axios.post(

                    "http://localhost:8080/api/orders/details",

                    {


                        orderId: orderId,


                        itemId: item.item_id,


                        quantity: item.quantity,


                        price: item.price


                    }

                );


            }





            alert("Order placed successfully!");



            clearCart();



        }catch(error){


            console.log(error);


            alert("Order Failed");


        }


    };









    const placeOrder = ()=>{


        createOrder();


    };








    const payNow = ()=>{


        createOrder();


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


                    <h3>
                        Total Amount : Rs. {total}
                    </h3>


                </div>







                <h2>Select Payment Method</h2>




                <div className="payment-option">


                    <input

                        type="radio"

                        value="Cash"

                        checked={paymentMethod==="Cash"}

                        onChange={(e)=>
                            setPaymentMethod(e.target.value)
                        }

                    />


                    Cash on Delivery


                </div>







                <div className="payment-option">


                    <input

                        type="radio"

                        value="Online"

                        checked={paymentMethod==="Online"}

                        onChange={(e)=>
                            setPaymentMethod(e.target.value)
                        }

                    />


                    Online Payment


                </div>








                {paymentMethod==="Cash" && (


                    <div className="cash-box">


                        <h2>Delivery Information</h2>


                        <p>Name : {customer.name}</p>

                        <p>Phone : {customer.phone}</p>

                        <p>Address : {customer.address}</p>

                        <p>Date : {customer.eventDate}</p>


                        <h3>
                            Total : Rs. {total}
                        </h3>



                        <button onClick={placeOrder}>

                            Place Order

                        </button>


                    </div>


                )}








                {paymentMethod==="Online" && (


                    <div className="online-box">


                        <h2>Card Details</h2>



                        <input

                        name="holder"

                        placeholder="Card Holder Name"

                        onChange={handleCardChange}

                        />



                        <input

                        name="number"

                        placeholder="Card Number"

                        onChange={handleCardChange}

                        />




                        <input

                        name="expiry"

                        placeholder="MM/YY"

                        onChange={handleCardChange}

                        />



                        <input

                        name="cvv"

                        placeholder="CVV"

                        type="password"

                        onChange={handleCardChange}

                        />



                        <h3>
                            Total : Rs. {total}
                        </h3>



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