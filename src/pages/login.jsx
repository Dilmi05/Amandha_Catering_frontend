import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(e) {

        e.preventDefault();

        setError("");

        try {

            const response = await axios.post(
                "http://localhost:8080/catering-backend/login",

                new URLSearchParams({
                    email,
                    password
                }),

                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            );

            // Check login result
            if (response.data.status === "success") {

                if (response.data.role === "admin") {

                    navigate("/admin");

                } else if (response.data.role === "customer") {

                    navigate("/home");

                } else {

                    setError("Unknown user role");

                }

            } else {

                setError("Invalid Email or Password");

            }

        } catch (error) {

            console.log(error);
            setError("Server Error");

        }

    }

    return (

        <div className="login-container">

            <div className="login-card">

                <h2>Login</h2>

                <p>Welcome Back</p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="input-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    {error && (
                        <p className="error">
                            {error}
                        </p>
                    )}

                    <button type="submit" className="login-btn">
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