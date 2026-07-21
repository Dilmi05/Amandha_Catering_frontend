import { useEffect, useState } from "react";
import axios from "axios";
import "./adminuser.css";

function AdminUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/users"
            );

            setUsers(response.data);

        } catch (error) {

            console.log(error);
            alert("Cannot load users");

        }

    };

    const viewUser = (user) => {

        alert(
            `User Information

User ID: ${user.userId}
Name: ${user.name}
Email: ${user.email}
Role: ${user.role}`
        );

    };

    return (

        <div className="users-container">

            <h1>Manage Users</h1>

            <table>

                <thead>

                    <tr>

                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr key={user.userId}>

                            <td>{user.userId}</td>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>

                                <span
                                    className={
                                        user.role === "admin"
                                            ? "admin-role"
                                            : "customer-role"
                                    }
                                >
                                    {user.role}
                                </span>

                            </td>

                            <td>

                                <button
                                    className="view-btn"
                                    onClick={() => viewUser(user)}
                                >
                                    View
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default AdminUsers;