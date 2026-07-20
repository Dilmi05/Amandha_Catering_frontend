import { useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../pages/cartcontext";
import "./payment.css";


function Payment() {


    const { cart, clearCart } = useContext(CartContext);



    const total = cart.reduce(
        (sum, item) =>
            sum + Number(item.price) * Number(item.quantity),
        0
    );



    const loggedUser =
        JSON.parse(localStorage.getItem("user")) || {};



    const [paymentMethod, setPaymentMethod] = useState("");

    const [loading,setLoading] = useState(false);



    const [customer,setCustomer] = useState({

        customerId: Number(loggedUser.userId),

        name: loggedUser.name || "",

        phone:"",

        email: loggedUser.email || "",

        address:"",

        eventDate:"",

        eventTime:""

    });




    const [card,setCard] = useState({

        holder:"",
        number:"",
        expiry:"",
        cvv:""

    });





    const handleCustomerChange=(e)=>{

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


        if(loading)
            return;



        if(cart.length===0){

            alert("Cart is empty");
            return;

        }



        if(!loggedUser.userId){

            alert("User ID missing. Login again.");

            return;

        }



        if(customer.address.trim()===""){

            alert("Enter delivery address");

            return;

        }



        if(customer.eventDate===""){

            alert("Select event date");

            return;

        }



        if(paymentMethod===""){

            alert("Select payment method");

            return;

        }





        try{


            setLoading(true);



            // CREATE ORDER

            const orderResponse = await axios.post(

                "http://localhost:8080/api/orders",

                {

                    customerId:Number(loggedUser.userId),

                    eventDate:customer.eventDate,

                    totalAmount:Number(total),

                    status:"pending"

                }

            );




            console.log(
                "ORDER RESPONSE",
                orderResponse.data
            );



            const orderId =
                orderResponse.data.orderId;



            if(!orderId){

                throw new Error(
                    "Order ID not returned"
                );

            }




            // ORDER DETAILS

            for(const item of cart){


                await axios.post(

                    "http://localhost:8080/api/orders/details",

                    {

                        orderId:Number(orderId),

                        itemId:Number(item.item_id),

                        quantity:Number(item.quantity),

                        price:Number(item.price)

                    }

                );


            }





            // PAYMENT

            const paymentResponse = await axios.post(

                "http://localhost:8080/api/payments",

                {

                    orderId:Number(orderId),

                    amount:Number(total),

                    method:paymentMethod,

                    status:
                    paymentMethod==="Online"
                    ?
                    "paid"
                    :
                    "pending"

                }

            );



            console.log(
                "PAYMENT RESPONSE",
                paymentResponse.data
            );




            alert(
                "Order placed successfully"
            );



            clearCart();


            window.location.href="/home";



        }
        catch(error){


            console.error(error);


            console.log(
                error.response?.data
            );


            alert(
                "Order Failed"
            );


        }
        finally{


            setLoading(false);

        }



    };








    return (

        <div className="payment-container">

            <div className="payment-card">


                <h1>
                    Catering Payment
                </h1>



                <h2>
                    Customer Information
                </h2>




                <input

                name="name"

                placeholder="Full Name"

                value={customer.name}

                onChange={handleCustomerChange}

                />





                <input

                name="phone"

                placeholder="Phone Number"

                value={customer.phone}

                onChange={handleCustomerChange}

                />





                <input

                type="email"

                name="email"

                placeholder="Email"

                value={customer.email}

                onChange={handleCustomerChange}

                />





                <textarea

                name="address"

                placeholder="Delivery Address"

                value={customer.address}

                onChange={handleCustomerChange}

                />






                <label>
                    Event Date
                </label>


                <input

                type="date"

                name="eventDate"

                value={customer.eventDate}

                onChange={handleCustomerChange}

                />





                <label>
                    Event Time
                </label>


                <input

                type="time"

                name="eventTime"

                value={customer.eventTime}

                onChange={handleCustomerChange}

                />







                <h2>
                    Total : Rs. {total}
                </h2>







                <h2>
                    Payment Method
                </h2>




                <label className="radio-option">


                <input

                type="radio"

                value="Cash"

                checked={paymentMethod==="Cash"}

                onChange={(e)=>
                    setPaymentMethod(e.target.value)
                }

                />

                Cash On Delivery


                </label>






                <label className="radio-option">


                <input

                type="radio"

                value="Online"

                checked={paymentMethod==="Online"}

                onChange={(e)=>
                    setPaymentMethod(e.target.value)
                }

                />

                Online Payment


                </label>






                {
                paymentMethod==="Online" &&

                <div className="card-box">


                    <h3>
                        Card Details
                    </h3>


                    <input
                    name="holder"
                    placeholder="Card Holder"
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


                </div>

                }





                <button

                onClick={createOrder}

                disabled={loading}

                >

                {
                    loading
                    ?
                    "Processing..."
                    :
                    "Place Order"
                }


                </button>




            </div>


        </div>

    );


}


export default Payment;