import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");


        try {

            const response = await axios.post(

                "http://localhost:8080/catering-backend/login",

                new URLSearchParams({

                    email: email,
                    password: password

                }),

                {

                    headers: {

                        "Content-Type": "application/x-www-form-urlencoded"

                    }

                }

            );


            console.log("Login Response:", response.data);



            if(response.data.status === "success") {


                const user = {

                    userId: response.data.userId,

                    name: response.data.name,

                    email: response.data.email,

                    role: response.data.role

                };


                console.log("Saved User:", user);



                // Check user id
                if(!user.userId){

                    setError("User ID not received from server");

                    return;

                }



                localStorage.setItem(

                    "user",

                    JSON.stringify(user)

                );



                console.log(

                    "Local Storage User:",

                    JSON.parse(localStorage.getItem("user"))

                );





                if(user.role === "admin") {


                    navigate("/admin");


                }
                else if(user.role === "customer") {


                    navigate("/home");


                }
                else {


                    setError("Invalid User Role");


                }



            }
            else {


                setError("Invalid Email or Password");


            }



        }
        catch(error) {


            console.log(error);


            if(error.response){

                console.log(
                    "Backend Error:",
                    error.response.data
                );

            }


            setError("Login Failed");


        }


    };




    return (


        <div className="login-container">


            <div className="login-card">


                <h2>
                    Login
                </h2>


                <p>
                    Welcome Back
                </p>




                <form onSubmit={handleLogin}>


                    <div className="input-group">


                        <label>
                            Email
                        </label>


                        <input

                            type="email"

                            placeholder="Enter email"

                            value={email}

                            onChange={(e)=>
                                setEmail(e.target.value)
                            }

                            required

                        />


                    </div>






                    <div className="input-group">


                        <label>
                            Password
                        </label>


                        <input

                            type="password"

                            placeholder="Enter password"

                            value={password}

                            onChange={(e)=>
                                setPassword(e.target.value)
                            }

                            required

                        />


                    </div>






                    {
                        error &&

                        <p className="error">

                            {error}

                        </p>

                    }






                    <button

                        type="submit"

                        className="login-btn"

                    >

                        Login

                    </button>





                </form>







                <div className="footer-links">


                    <Link to="/forgot-password">

                        Forgot Password?

                    </Link>




                    <p>

                        Don't have an account?


                        <Link to="/register">

                            {" "}Register

                        </Link>


                    </p>



                </div>




            </div>



        </div>


    );


}


export default Login;