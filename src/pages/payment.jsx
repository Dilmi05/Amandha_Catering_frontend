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

        name: loggedUser.name || "",

        phone:"",

        email:loggedUser.email || "",

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






   const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
        const phone = value.replace(/\D/g, "").slice(0, 10);

        setCustomer((prev) => ({
            ...prev,
            phone,
        }));
    } else if (name === "name") {
        const fullName = value.replace(/[^A-Za-z ]/g, "");

        setCustomer((prev) => ({
            ...prev,
            name: fullName,
        }));
    } else {
        setCustomer((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
};





    const handleCardChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "holder") {
        // Only letters and spaces
        newValue = value.replace(/[^A-Za-z ]/g, "");
    } else if (name === "number") {
        // Only numbers, max 16 digits
        newValue = value.replace(/\D/g, "").slice(0, 16);
    } else if (name === "expiry") {
        // MM/YY format
        let numbers = value.replace(/\D/g, "").slice(0, 4);

        if (numbers.length > 2) {
            newValue = numbers.slice(0, 2) + "/" + numbers.slice(2);
        } else {
            newValue = numbers;
        }
    } else if (name === "cvv") {
        // Only numbers, max 3 digits
        newValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setCard((prev) => ({
        ...prev,
        [name]: newValue,
    }));
};






    const createOrder = async()=>{


        if(loading)
            return;



        if(cart.length===0){

            alert("Cart is empty");

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






            const orderId =
            orderResponse.data.orderId;






            // SAVE ORDER DETAILS


            for(const item of cart){


                await axios.post(

                    "http://localhost:8080/api/orders/details",

                    {


                        orderId:Number(orderId),


                        itemId:Number(item.itemId),


                        quantity:Number(item.quantity),


                        price:Number(item.price)


                    }

                );


            }







            // SAVE PAYMENT


            await axios.post(

                "http://localhost:8080/api/payments",

                {


                    orderId:Number(orderId),


                    amount:Number(total),


                    method:paymentMethod,


                    status:

                    paymentMethod==="Online"

                    ?

                    "Paid"

                    :

                    "Pending"


                }

            );






            alert("Order placed successfully");



            clearCart();



            navigate("/myorders");



        }


        catch(error){


            console.log(error);


            alert("Order failed");


        }


        finally{


            setLoading(false);


        }



    };









return(


<div className="payment-page">


<UserNavbar />



<div className="payment-container">



<div className="payment-card">



<h1>
Catering Payment
</h1>





<h2>
Customer Information
</h2>




<input
    type="text"
    name="name"
    placeholder="Full Name"
    value={customer.name}
    onChange={handleCustomerChange}
/>





<input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    value={customer.phone}
    onChange={handleCustomerChange}
    maxLength={10}
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

name="payment"

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

name="payment"

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
    maxLength={16}
/>





<div className="card-row">


<input
    type="text"
    name="expiry"
    placeholder="MM/YY"
    value={card.expiry}
    onChange={handleCardChange}
    maxLength={5}
/>



<input
    type="password"
    name="cvv"
    placeholder="CVV"
    value={card.cvv}
    onChange={handleCardChange}
    maxLength={3}
/>



</div>



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




<UserFooter />


</div>



);


}



export default Payment;