import "./home.css";
import { useContext } from "react";
import { CartContext } from "../pages/cartcontext";
import { useNavigate } from "react-router-dom";


function Home() {


const { addToCart, cart } = useContext(CartContext);

const navigate = useNavigate();



const items = [
  {
    item_id: 1,
    item_name: "Dinner Plates",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    price: 50
  },

  {
    item_id: 2,
    item_name: "Round Tables",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    price: 500
  },

  {
    item_id: 3,
    item_name: "Wedding Chairs",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    price: 100
  },

  {
    item_id: 4,
    item_name: "Glass Collection",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
    price: 30
  }
];



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


<div className="item-card" key={item.item_id}>


<img
src={item.image}
alt={item.item_name}
/>



<h2>
{item.item_name}
</h2>



<p>
Rs. {item.price}
</p>



<button
onClick={()=>addToCart(item)}
>
Book Now
</button>



</div>


))
}



</div>



{/* Checkout Button Bottom */}

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