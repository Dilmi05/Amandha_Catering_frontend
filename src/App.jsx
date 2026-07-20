import { BrowserRouter,Routes,Route } from "react-router-dom";

import {CartProvider} from "./pages/cartcontext";

import Login from "./pages/login";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Payment from "./pages/payment";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import ItemPage from "./pages/item";
import AdminHome from "./pages/adminhome";
import AdminUsers from "./pages/adminuser";
import AdminOrders from "./pages/adminorder";
import MyOrders from "./pages/MyOrders";
import About from "./pages/About";
import Services from "./pages/Service";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";





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

<Route path="/admin/items" element={<ItemPage />} />

<Route path="/admin" element={<AdminHome />} />

<Route path="/login" element={<Login />} />

<Route path="/admin/orders" element={<AdminOrders />} />

<Route path="/admin/users"element={<AdminUsers />}/>

<Route path="/myorders" element={<MyOrders />} />

<Route path="/about" element={<About />} />

<Route path="/services" element={<Services />} />

<Route path="/contact" element={<Contact />} />

<Route path="/gallery" element={<Gallery />} />

<Route path="/faq" element={<FAQ />} />

<Route path="/terms" element={<Terms />} />

<Route path="/profile" element={<Profile />} />




 
 

</Routes>

</BrowserRouter>

</CartProvider>


)

}


export default App;