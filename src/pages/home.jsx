import "./home.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/cartcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Home() {


const { addToCart, cart } = useContext(CartContext);

const navigate = useNavigate();


const [items, setItems] = useState([]);



useEffect(()=>{


    axios
    .get("http://localhost:8080/api/items")
    .then((response)=>{

        setItems(response.data);

    })
    .catch((error)=>{

        console.log("Error loading items:", error);

    });


},[]);



return (

<div className="home">



<header className="home-header">

<h1>
Amandha Catering Rentals
</h1>

<p>
Quality catering equipment for your special events
</p>

</header>




<div className="item-container">


{
items.map((item)=>(


<div 
className="item-card" 
key={item.itemId}
>



{/* Image placeholder because database has no image column */}

<img
src="https://images.unsplash.com/photo-1547592180-85f173990554"
alt={item.itemName}
/>




<h2>
{item.itemName}
</h2>



<p>
{item.description}
</p>



<p>
Category: {item.category}
</p>



<p>
Status: {item.available ? "Available" : "Not Available"}
</p>

<p>
Rs. {item.price}
</p>



<button

disabled={!item.available}

onClick={()=>addToCart(item)}

>

{
item.available ? "Book Now" : "Not Available"
}

</button>




</div>


))

}



</div>





<div className="bottom-checkout">


<button

className="checkout-btn"

onClick={()=>navigate("/cart")}

>

Checkout Cart ({cart.length})

</button>


</div>



</div>


);

}


export default Home;