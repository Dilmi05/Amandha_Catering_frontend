import { createContext, useState } from "react";


export const CartContext = createContext();



export function CartProvider({ children }) {


    const [cart, setCart] = useState([]);



    // Add item to cart
    const addToCart = (item) => {


        setCart((previousCart) => {


            const existingItem = previousCart.find(

                (cartItem) => cartItem.itemId === item.itemId

            );



            if (existingItem) {


                return previousCart.map((cartItem) =>


                    cartItem.itemId === item.itemId


                    ?

                    {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }


                    :

                    cartItem


                );


            }




            return [

                ...previousCart,

                {
                    ...item,
                    quantity: 1
                }

            ];



        });


    };







    // Increase quantity
    const increase = (id) => {


        setCart((previousCart) =>


            previousCart.map((item) =>


                item.itemId === id


                ?

                {
                    ...item,
                    quantity: item.quantity + 1
                }


                :

                item


            )


        );


    };








    // Decrease quantity
    const decrease = (id) => {


        setCart((previousCart) =>


            previousCart.map((item) =>


                item.itemId === id && item.quantity > 1


                ?

                {
                    ...item,
                    quantity: item.quantity - 1
                }


                :

                item


            )


        );


    };










    // Remove item
    const removeItem = (id) => {


        setCart((previousCart) =>


            previousCart.filter(

                (item) => item.itemId !== id

            )


        );


    };








    // Clear cart
    const clearCart = () => {


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