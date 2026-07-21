import { useEffect, useState } from "react";
import axios from "axios";
import "./item.css";


function ItemPage() {


    const API_URL = "http://localhost:8080/api/items";


    const emptyItem = {

        item_name:"",
        description:"",
        category:"",
        price:"",
        image:"",
        available:true

    };



    const [item,setItem] = useState(emptyItem);

    const [items,setItems] = useState([]);

    const [editId,setEditId] = useState(null);





    useEffect(()=>{

        getItems();

    },[]);






    // GET ITEMS

    const getItems = async()=>{

        try{

            const response = await axios.get(API_URL);

            setItems(response.data);


        }catch(error){

            console.log(error);

            alert("Cannot load items");

        }

    };







    // INPUT CHANGE

    const handleChange=(e)=>{


        const {name,value,type,checked}=e.target;


        setItem({

            ...item,

            [name]:

            type==="checkbox"
            ?
            checked
            :
            value

        });


    };









    // FORMAT DATA FOR SPRING BOOT

    const formatItemData=()=>{


        return{


            itemName:item.item_name,

            description:item.description,

            category:item.category,

            price:item.price,

            image:item.image,

            available:item.available


        };


    };









    // ADD UPDATE

    const handleSubmit=async(e)=>{


        e.preventDefault();


        try{


            const data=formatItemData();



            if(editId){


                await axios.put(

                    `${API_URL}/${editId}`,

                    data

                );


                alert("Item Updated Successfully");



            }else{


                await axios.post(

                    API_URL,

                    data

                );


                alert("Item Added Successfully");


            }



            clearForm();

            getItems();



        }catch(error){


            console.log(error);

            alert("Operation Failed");


        }


    };









    // EDIT ITEM

    const editItem=(data)=>{


        setItem({


            item_name:data.itemName,

            description:data.description,

            category:data.category,

            price:data.price,

            image:data.image,

            available:data.available


        });



        setEditId(data.itemId);



        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    };









    // DELETE ITEM

    const deleteItem=async(id)=>{


        if(!window.confirm("Delete this item?")){

            return;

        }



        try{


            await axios.delete(

                `${API_URL}/${id}`

            );


            alert("Item Deleted");


            getItems();



        }catch(error){


            console.log(error);

            alert("Delete Failed");


        }


    };









    // CLEAR FORM

    const clearForm=()=>{


        setItem(emptyItem);

        setEditId(null);


    };







    return(



        <div className="admin-item-page">





            {/* FORM */}

            <div className="admin-item-form">


                <h2>

                    {editId ? "Update Item" : "Add New Item"}

                </h2>




                <form onSubmit={handleSubmit}>


                    <label>
                        Item Name
                    </label>


                    <input

                        type="text"

                        name="item_name"

                        value={item.item_name}

                        onChange={handleChange}

                        required

                    />





                    <label>
                        Description
                    </label>


                    <textarea

                        name="description"

                        value={item.description}

                        onChange={handleChange}

                    />







                    <label>
                        Category
                    </label>


                    <select

                        name="category"

                        value={item.category}

                        onChange={handleChange}

                        required

                    >


                        <option value="">
                            Select Category
                        </option>


                        <option value="Plates">
                            Plates
                        </option>


                        <option value="Tables">
                            Tables
                        </option>


                        <option value="Chairs">
                            Chairs
                        </option>


                        <option value="Glassware">
                            Glassware
                        </option>


                        <option value="Decoration">
                            Decoration
                        </option>


                        <option value="Cutlery">
                            Cutlery
                        </option>


                    </select>







                    <label>
                        Price
                    </label>


                    <input

                        type="number"

                        name="price"

                        value={item.price}

                        onChange={handleChange}

                        required

                    />








                    <label>
                        Image URL
                    </label>


                    <input

                        type="text"

                        name="image"

                        value={item.image}

                        onChange={handleChange}

                    />








                    <div className="checkbox">


                        <input

                            type="checkbox"

                            name="available"

                            checked={item.available}

                            onChange={handleChange}

                        />


                        Available


                    </div>








                    <button type="submit">


                        {editId ? "Update Item" : "Add Item"}


                    </button>







                    {
                        editId &&


                        <button

                            type="button"

                            className="cancel-btn"

                            onClick={clearForm}

                        >

                            Cancel


                        </button>

                    }




                </form>


            </div>









            {/* TABLE */}


            <div className="admin-item-table">


                <h2>
                    All Items
                </h2>





                <table>


                    <thead>


                        <tr>


                            <th>
                                Image
                            </th>


                            <th>
                                Name
                            </th>


                            <th>
                                Category
                            </th>


                            <th>
                                Price
                            </th>


                            <th>
                                Available
                            </th>


                            <th>
                                Action
                            </th>


                        </tr>


                    </thead>






                    <tbody>


                    {

                        items.map((data)=>(


                            <tr key={data.itemId}>


                                <td>


                                    <img

                                        src={data.image}

                                        className="item-image"

                                        alt={data.itemName}

                                    />


                                </td>




                                <td>

                                    {data.itemName}

                                </td>





                                <td>

                                    {data.category}

                                </td>





                                <td>

                                    LKR {data.price}

                                </td>





                                <td>


                                    {

                                        data.available

                                        ?

                                        "Yes"

                                        :

                                        "No"

                                    }


                                </td>







                                <td>



                                    <button

                                        className="edit-btn"

                                        onClick={()=>editItem(data)}

                                    >

                                        Edit

                                    </button>





                                    <button

                                        className="delete-btn"

                                        onClick={()=>deleteItem(data.itemId)}

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





        </div>



    );



}


export default ItemPage;