import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';
import useCustomForm from "../../hooks/useCustomForm"

//change these values for your own

let initialValues = {
    make: "",
    model: "",
    year: "",
}

const AddProductPage = () => {
    const [user, token] = useAuth()
    const navigate= useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewProduct)

    async function postNewProduct(){
        try{                //change urls to be products page, subscription tier page, (checkout) page// 
            let response = await axios.post("http://127.0.0.1:8000/api/cars/", formData, {
                headers:{
                    Authorization:'Bearer ' + token
                }
            }) 
            navigate("/")
        } catch(error){
            console.log(error.message)

        }
    }

    return(
        <div className='container'>
        <h2>{user.username}</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Make:{}
                    <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Model:{""}
                    <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                   /> 
                </label>
                <label>
                    Year:{""}
                    <input
                    type="text"
                    name="year"
                    value={formData.model}
                    onChange={handleInputChange}
                   /> 
                </label>
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default AddProductPage