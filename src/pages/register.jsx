import { Link } from "react-router-dom";
import "./login.css";


function Register(){

return(

<div className="login-container">

<div className="login-card">

<h2>Create Account</h2>

<p>Register New User</p>


<div className="input-group">
<label>Name</label>
<input 
type="text"
placeholder="Enter name"
/>
</div>



<div className="input-group">
<label>Email</label>
<input 
type="email"
placeholder="Enter email"
/>
</div>



<div className="input-group">
<label>Password</label>
<input 
type="password"
placeholder="Create password"
/>
</div>



<button className="login-btn">
Register
</button>


<div className="footer-links">

<Link to="/">
Already have account? Login
</Link>

</div>


</div>

</div>

)

}


export default Register;