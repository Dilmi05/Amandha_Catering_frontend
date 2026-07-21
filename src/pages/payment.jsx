import { useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../pages/cartcontext";
import "./payment.css";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import UserFooter from "../components/Footer";


function Payment() {


    const navigate = useNavigate();


    const { cart, clearCart } = useContext(CartContext);



    const total = cart.reduce(
        (sum,item)=>
        sum + Number(item.price) * Number(item.quantity),
        0
    );



    const loggedUser =
        JSON.parse(localStorage.getItem("user")) || {};



    const [paymentMethod,setPaymentMethod] = useState("");

    const [loading,setLoading] = useState(false);



    const [customer,setCustomer] = useState({

        customerId:Number(loggedUser.userId),

        name:loggedUser.name || "",

        phone:"",

        email:loggedUser.email || "",

        address:"",

        eventDate:"",

        eventTime:""

    });



    const handleCustomerChange=(e)=>{


        setCustomer({

            ...customer,

            [e.target.name]:e.target.value

        });


    };





    const createOrder=async()=>{


        if(cart.length===0){

            alert("Cart Empty");
            return;

        }



        try{


            setLoading(true);



            const orderResponse =
            await axios.post(

            "http://localhost:8080/api/orders",

            {


                customerId:Number(loggedUser.userId),

                eventDate:customer.eventDate,

                totalAmount:Number(total),

                status:"pending"

            }

            );



            const orderId =
            orderResponse.data.orderId;



            for(const item of cart){


                await axios.post(

                "http://localhost:8080/api/orders/details",

                {

                    orderId:orderId,

                    itemId:item.item_id,

                    quantity:item.quantity,

                    price:item.price

                }

                );

            }





            await axios.post(

            "http://localhost:8080/api/payments",

            {

                orderId:orderId,

                amount:Number(total),

                method:paymentMethod,

                status:"pending"

            }

            );



            alert("Order Successful");


            clearCart();


            navigate("/myorders");



        }

        catch(error){


            console.log(error);

            alert("Order Failed");


        }

        finally{


            setLoading(false);


        }


    };





return(


<div className="payment-page">



    {/* Navbar */}

    <UserNavbar />





    {/* Payment Content */}


    <main className="payment-container">



        <div className="payment-card">



            <h1>
                Catering Payment
            </h1>





            <h2>
                Customer Information
            </h2>




            <input

            name="name"

            value={customer.name}

            onChange={handleCustomerChange}

            placeholder="Full Name"

            />





            <input

            name="phone"

            value={customer.phone}

            onChange={handleCustomerChange}

            placeholder="Phone Number"

            />





            <input

            name="email"

            value={customer.email}

            onChange={handleCustomerChange}

            placeholder="Email"

            />





            <textarea

            name="address"

            value={customer.address}

            onChange={handleCustomerChange}

            placeholder="Address"

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
            setPaymentMethod(e.target.value)}

            />

            Cash On Delivery


            </label>





            <label className="radio-option">


            <input

            type="radio"

            value="Online"

            checked={paymentMethod==="Online"}

            onChange={(e)=>
            setPaymentMethod(e.target.value)}

            />

            Online Payment


            </label>






            <button

            onClick={createOrder}

            disabled={loading}

            >

            {
                loading?
                "Processing..."
                :
                "Place Order"
            }


            </button>





        </div>



    </main>





    {/* Footer */}

    <UserFooter />




</div>


);


}


export default Payment;