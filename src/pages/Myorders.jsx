import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./myorders.css";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";


function MyOrders() {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loggedUser =
        JSON.parse(localStorage.getItem("user")) || {};



    useEffect(() => {

        loadOrders();

    }, []);




    const loadOrders = async () => {

        if (!loggedUser.userId) {

            alert("Please login first");

            navigate("/login");

            return;

        }

        try {

            const response = await axios.get(

                `http://localhost:8080/api/orders/customer/${loggedUser.userId}`

            );

            setOrders(response.data);

        }
        catch (error) {

            console.log(error);

            alert("Cannot load your orders");

        }
        finally {

            setLoading(false);

        }

    };




    const getStatusColor = (status) => {

        switch (status) {

            case "pending":
                return "#ff9800";

            case "confirmed":
                return "#2196f3";

            case "completed":
                return "#4caf50";

            case "cancelled":
                return "#f44336";

            default:
                return "#666";
        }

    };



    return (

        <div className="myorders-container">


            {/* Navbar */}
            <UserNavbar />



            <h1>My Orders</h1>


            {
                loading ?

                    <h2>Loading...</h2>

                    :

                    orders.length === 0 ?

                        <h2>No Orders Found</h2>

                        :

                        <table className="orders-table">

                            <thead>

                                <tr>

                                    <th>Order ID</th>

                                    <th>Order Date</th>

                                    <th>Event Date</th>

                                    <th>Total</th>

                                    <th>Status</th>

                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {
                                    orders.map((order) => (

                                        <tr key={order.orderId}>


                                            <td>
                                                {order.orderId}
                                            </td>


                                            <td>
                                                {order.orderDate}
                                            </td>


                                            <td>
                                                {order.eventDate}
                                            </td>


                                            <td>
                                                LKR {order.totalAmount}
                                            </td>


                                            <td>

                                                <span

                                                    className="status-badge"

                                                    style={{
                                                        backgroundColor:
                                                            getStatusColor(order.status)
                                                    }}

                                                >

                                                    {order.status}

                                                </span>

                                            </td>


                                            <td>

                                                <button

                                                    className="view-btn"

                                                    onClick={() =>
                                                        navigate(`/order/${order.orderId}`)
                                                    }

                                                >

                                                    View Details

                                                </button>

                                            </td>


                                        </tr>

                                    ))

                                }

                            </tbody>


                        </table>

            }



            {/* Footer */}

            <Footer />


        </div>

    );

}

export default MyOrders;