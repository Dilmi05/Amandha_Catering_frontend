import { createContext, useState } from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);


    const addToCart = (item) => {

        setCart((previousCart) => {

            const existingItem = previousCart.find(
                (cartItem) => cartItem.item_id === item.item_id
            );


            if (existingItem) {

                return previousCart.map((cartItem) =>

                    cartItem.item_id === item.item_id

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



    const increase = (id) => {

        setCart((previousCart) =>

            previousCart.map((item) =>

                item.item_id === id

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



    const decrease = (id) => {

        setCart((previousCart) =>

            previousCart.map((item) =>

                item.item_id === id && item.quantity > 1

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



    const removeItem = (id) => {

        setCart((previousCart) =>

            previousCart.filter(

                (item) => item.item_id !== id

            )

        );

    };



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