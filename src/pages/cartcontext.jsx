import { createContext, useState } from "react";


export const CartContext = createContext();



export function CartProvider({ children }) {


    const [cart, setCart] = useState([]);



    // Add item
    const addToCart = (item) => {


        const existing =
            cart.find(
                (x) => x.item_id === item.item_id
            );


        if(existing){


            setCart(

                cart.map((x)=>

                    x.item_id === item.item_id

                    ?

                    {
                        ...x,
                        quantity:x.quantity + 1
                    }

                    :

                    x

                )

            );


        }
        else{


            setCart([

                ...cart,

                {
                    ...item,
                    quantity:1
                }

            ]);


        }


    };




    // Increase quantity
    const increase = (id)=>{


        setCart(

            cart.map(item =>

                item.item_id === id

                ?

                {
                    ...item,
                    quantity:item.quantity + 1
                }

                :

                item

            )

        );


    };





    // Decrease quantity
    const decrease = (id)=>{


        setCart(

            cart.map(item =>

                item.item_id === id && item.quantity > 1

                ?

                {
                    ...item,
                    quantity:item.quantity - 1
                }

                :

                item

            )

        );


    };






    // Remove item
    const removeItem = (id)=>{


        setCart(

            cart.filter(

                item => item.item_id !== id

            )

        );


    };







    // Clear cart after order
    const clearCart = ()=>{


        setCart([]);


    };







    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                increase,

                decrease,

                removeItem,

                clearCart

            }}

        >

            {children}

        </CartContext.Provider>

    );


}