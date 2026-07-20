import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";


function Register(){


    const navigate = useNavigate();



    const [user,setUser] = useState({

        name:"",
        email:"",
        password:""

    });





    const handleChange = (e)=>{

        setUser({

            ...user,

            [e.target.name]:e.target.value

        });

    };






    const handleRegister = async(e)=>{

        e.preventDefault();


        try{


            await axios.post(

                "http://localhost:8080/api/users/register",

                user

            );



            alert("Registration Successful");


            navigate("/");



        }catch(error){


            console.log(error);


            alert("Registration Failed");


        }


    };







    return(


        <div className="login-container">


            <div className="login-card">


                <h2>Create Account</h2>


                <p>Register New User</p>





                <form onSubmit={handleRegister}>




                <div className="input-group">

                <label>Name</label>

                <input 

                type="text"

                name="name"

                value={user.name}

                onChange={handleChange}

                placeholder="Enter name"

                required

                />

                </div>








                <div className="input-group">

                <label>Email</label>

                <input 

                type="email"

                name="email"

                value={user.email}

                onChange={handleChange}

                placeholder="Enter email"

                required

                />

                </div>








                <div className="input-group">

                <label>Password</label>

                <input 

                type="password"

                name="password"

                value={user.password}

                onChange={handleChange}

                placeholder="Create password"

                required

                />

                </div>







                <button 
                className="login-btn"
                type="submit"
                >

                    Register

                </button>




                </form>





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