import {createContext,useState} from "react";


export const CartContext=createContext();



export function CartProvider({children}){


const [cart,setCart]=useState([]);



const addToCart=(item)=>{


const exist=cart.find(
(x)=>x.item_id===item.item_id
);



if(exist){


setCart(

cart.map(x=>

x.item_id===item.item_id

?

{
...x,
quantity:x.quantity+1
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



const increase=(id)=>{


setCart(

cart.map(item=>

item.item_id===id

?

{
...item,
quantity:item.quantity+1
}

:

item

)

);


};



const decrease=(id)=>{


setCart(

cart.map(item=>

item.item_id===id && item.quantity>1

?

{
...item,
quantity:item.quantity-1
}

:

item

)

);


};



const removeItem=(id)=>{


setCart(

cart.filter(
item=>item.item_id!==id
)

);


};



return(

<CartContext.Provider

value={{
cart,
addToCart,
increase,
decrease,
removeItem
}}

>

{children}

</CartContext.Provider>

);


}