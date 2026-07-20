import { useEffect, useState } from "react";
import axios from "axios";
import "./adminorder.css";


function AdminOrders() {


    const [orders, setOrders] = useState([]);



    useEffect(()=>{

        getOrders();

    },[]);





    const getOrders = async()=>{

        try{

            const response = await axios.get(
                "http://localhost:8080/api/orders"
            );


            setOrders(response.data);


        }catch(error){

            console.log(error);

            alert("Cannot load orders");

        }

    };







    const updateStatus = async(id,status)=>{


    try{


        await axios.put(

            `http://localhost:8080/api/orders/${id}`,

            {
                status: status
            }

        );


        alert("Order Status Updated");


        getOrders();



    }
    catch(error){


        console.log(error.response?.data || error);


        alert("Update Failed");


    }


};







    const deleteOrder = async(id)=>{


        if(!window.confirm("Delete this order?")){

            return;

        }



        try{


            await axios.delete(

                `http://localhost:8080/api/orders/${id}`

            );


            alert("Order Deleted");


            getOrders();



        }catch(error){

            console.log(error);

        }


    };







    return (

        <div className="orders-container">


            <h1>
                Manage Customer Orders
            </h1>




            <table>


                <thead>

                    <tr>

                        <th>
                            Order ID
                        </th>


                        <th>
                            Customer ID
                        </th>


                        <th>
                            Order Date
                        </th>


                        <th>
                            Event Date
                        </th>


                        <th>
                            Total Amount
                        </th>


                        <th>
                            Status
                        </th>


                        <th>
                            Actions
                        </th>


                    </tr>


                </thead>





                <tbody>


                {

                    orders.map((order)=>(


                        <tr key={order.orderId}>


                            <td>
                                {order.orderId}
                            </td>


                            <td>
                                {order.customerId}
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


                                <select

                                value={order.status}

                                onChange={(e)=>

                                    updateStatus(
                                        order.orderId,
                                        e.target.value
                                    )

                                }

                                >


                                    <option value="pending">
                                        Pending
                                    </option>


                                    <option value="confirmed">
                                        Confirmed
                                    </option>


                                    <option value="completed">
                                        Completed
                                    </option>


                                    <option value="cancelled">
                                        Cancelled
                                    </option>


                                </select>


                            </td>





                            <td>


                                <button

                                className="delete-btn"

                                onClick={()=>deleteOrder(order.orderId)}

                                >

                                    Delete

                                </button>


                            </td>


                        </tr>


                    ))

                }


                </tbody>


            </table>


        </div>

    );

}


export default AdminOrders;