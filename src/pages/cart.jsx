import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../pages/cartcontext";
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

            sum + (Number(item.price) * Number(item.quantity)),

        0

    );




    return (


        <div className="home">


            <h1>
                Your Cart
            </h1>





            {
                cart.length === 0 ? (



                    <div className="empty-cart">


                        <h2>
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
                            cart.map((item,index)=>(



                                <div

                                    className="cart-item"

                                    key={item.item_id || index}

                                >





                                    <img

                                        src={item.image}

                                        alt={item.item_name}

                                    />






                                    <div className="cart-details">





                                        <h2>

                                            {item.item_name}

                                        </h2>






                                        <p>

                                            Price : Rs. {Number(item.price)}

                                        </p>






                                        <div className="quantity">





                                            <button

                                                onClick={() =>
                                                    decrease(item.item_id)
                                                }

                                            >

                                                -

                                            </button>






                                            <span>

                                                {item.quantity}

                                            </span>






                                            <button

                                                onClick={() =>
                                                    increase(item.item_id)
                                                }

                                            >

                                                +

                                            </button>





                                        </div>







                                        <p>


                                            <strong>

                                                Sub Total : Rs.

                                                {
                                                    Number(item.price)
                                                    *
                                                    Number(item.quantity)
                                                }


                                            </strong>


                                        </p>







                                        <button


                                            className="remove-btn"


                                            onClick={() =>
                                                removeItem(item.item_id)
                                            }


                                        >

                                            Remove


                                        </button>






                                    </div>





                                </div>



                            ))

                        }





                        <hr />






                        <h2 className="total">


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


                                onClick={() => navigate("/payment")}


                            >


                                Checkout


                            </button>






                        </div>







                    </>



                )

            }




        </div>


    );


}


export default Cart;