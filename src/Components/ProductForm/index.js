import axios from 'axios';
import React, { useState } from 'react'
import Loader from '../Common/Loader';

function ProductForm({ isAdding }) {

    const [isLoading, setIsLoading] = useState(false);
    const [warningColor, setWarningColor] = useState("black")
    const [category, setCategory] = useState("fashion")

    const [formData, setFormData] = useState({
        name: '',
        category: 'fashion',
        sub_category: 'select',
        location: '',
        price: ''
    });

    const subCategory = {
        sports: ['football', 'cricket', 'badminton'],
        fashion: ['men', 'women'],
        electronics: ["smartphones", "tv", "earphones"]
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, e.target);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const addProduct = () => {
        axios.post(`${process.env.REACT_APP_API}/product/add`, formData,
            {
                headers: {
                    "qurinom-token": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            setIsLoading(false)
            setFormData({
                name: '',
                category: '',
                sub_category: '',
                location: '',
                price: ''
            })

            window.location.href = `/merchant/dashboard`
            console.log(res);
        })
            .catch((err) => {
                setIsLoading(false)
                if (err.response.data.message == "invalid input") setWarningColor("red")
                alert(err.response.data.message)
            })
    }
    const editProduct = () => {
        axios.post(`${process.env.REACT_APP_API}/product/add`, formData,
            {
                headers: {
                    "qurinom-token": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            setIsLoading(false)
            setFormData({
                name: '',
                category: '',
                sub_category: '',
                location: '',
                price: ''
            })

            window.location.href = `/merchant/dashboard`
            console.log(res);
        })
            .catch((err) => {
                setIsLoading(false)
                if (err.response.data.message == "invalid input") setWarningColor("red")
                alert(err.response.data.message)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.sub_category == "select") alert("please slect a sub category");
        // axios.post(`${process.env.REACT_APP_API}/product/add`, formData)
        else isAdding ? addProduct() : editProduct();

        // console.log(formData);
    };

    return (
        <> {isLoading ? <Loader /> :
            <div className="registration-form" style={{ minWidth: "600px" }}>
                <h2 className='register-title'>{isAdding ? "Add Product" : "Edit Product"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category:</label>
                        <select id="categoryDropdown" name='category' onChange={(e) => {
                            handleChange(e)
                            setCategory(e.target.value)
                        }}>
                            <option value="fashion">Fashion</option>
                            <option value="sports">Sports</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Sub Category:</label>
                        <select id="categoryDropdown" name='sub_category' onChange={handleChange}>
                            <option value="select">Select</option>
                            {
                                subCategory[category].map((ele) => <option value={ele}>{ele}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">{isAdding ? "Add" : "Edit"}</button>
                </form>
                <div>
                    <ul style={{ color: warningColor }}>
                        <li>all fields are required</li>

                    </ul>
                </div>
            </div>}
        </>

    );
}

export default ProductForm