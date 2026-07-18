import { BrowserRouter,Routes,Route } from "react-router-dom";

import {CartProvider} from "./pages/cartcontext";

import Login from "./pages/login";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Payment from "./pages/payment";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";


function App(){


return(

<CartProvider>

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>

<Route path="/home" element={<Home/>}/>

<Route path="/cart" element={<Cart/>}/>

<Route path="/cart" element={<Cart />} />

<Route path="/payment" element={<Payment />} />

<Route path="/register" element={<Register />} />

<Route path="/forgot-password" element={<ForgotPassword />} />

 
 

</Routes>

</BrowserRouter>

</CartProvider>


)

}


export default App;