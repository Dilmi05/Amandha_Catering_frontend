import { useEffect, useState } from "react";
import axios from "axios";
import "./adminuser.css";


function AdminUsers(){


    const [users,setUsers] = useState([]);



    useEffect(()=>{

        getUsers();

    },[]);




    const getUsers = async()=>{


        try{


            const response = await axios.get(
                "http://localhost:8080/api/users"
            );


            setUsers(response.data);



        }catch(error){


            console.log(error);

            alert("Cannot load users");


        }


    };







    const deleteUser = async(id)=>{


        if(!window.confirm("Delete this user?")){

            return;

        }



        try{


            await axios.delete(

                `http://localhost:8080/api/users/${id}`

            );


            alert("User deleted successfully");


            getUsers();



        }catch(error){


            console.log(error);

            alert("Delete failed");


        }


    };






    return(


        <div className="users-container">


            <h1>
                Manage Users
            </h1>



            <table>


                <thead>


                    <tr>


                        <th>
                            User ID
                        </th>


                        <th>
                            Name
                        </th>


                        <th>
                            Email
                        </th>


                        <th>
                            Role
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>




                <tbody>


                {

                    users.map((user)=>(


                        <tr key={user.userId}>


                            <td>
                                {user.userId}
                            </td>


                            <td>
                                {user.name}
                            </td>


                            <td>
                                {user.email}
                            </td>


                            <td>

                                <span className={
                                    user.role === "admin"
                                    ?
                                    "admin-role"
                                    :
                                    "customer-role"
                                }>

                                    {user.role}

                                </span>

                            </td>



                            <td>


                                {
                                    user.role !== "admin" &&

                                    <button

                                    className="delete-btn"

                                    onClick={()=>
                                        deleteUser(user.userId)
                                    }

                                    >

                                        Delete

                                    </button>

                                }


                            </td>



                        </tr>


                    ))

                }


                </tbody>


            </table>



        </div>


    );


}


export default AdminUsers;