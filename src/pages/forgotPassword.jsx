import { Link } from "react-router-dom";
import "./login.css";


function ForgotPassword(){

return(

<div className="login-container">


<div className="login-card">


<h2>Forgot Password</h2>

<p>Reset your password</p>



<div className="input-group">

<label>Email</label>

<input
type="email"
placeholder="Enter your email"
/>

</div>



<button className="login-btn">
Send Reset Link
</button>



<div className="footer-links">

<Link to="/">
Back to Login
</Link>

</div>



</div>


</div>

)

}


export default ForgotPassword;