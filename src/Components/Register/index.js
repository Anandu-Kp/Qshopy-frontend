import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import axios from "axios"
import Loader from '../Common/Loader';

function Register({ type }) {
    let [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [warningColor, setWarningColor] = useState("black")
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        password: '',
        location: '',
        company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const userData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password
        }
        if (type == "user") {
            userData.address = formData.address
        }
        else {
            userData.location = formData.location;
            userData.company = formData.company
        }
        axios.post(`${process.env.REACT_APP_API}/${type}/register`, userData)
            .then((res) => {
                setIsLoading(false)
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                    address: '',
                    location: '',
                    company: ''
                })
                localStorage.setItem("token", res.data.data.token)
                window.location.href = `/login/${type}`
                console.log(res);
            })
            .catch((err) => {
                setIsLoading(false)
                if (err.response.data.message == "invalid input") setWarningColor("red")
                alert(err.response.data.message)
            })
        // console.log(formData);
    };
    console.log(type);
    return (
        <> {isLoading ? <Loader /> :
            <div className="registration-form" style={{ minWidth: "600px" }}>
                <h2 className='register-title'>Registration Form</h2>
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
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    {type == "user" &&
                        <div className="form-group">
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>}
                    {type == "merchant" &&
                        <div className="form-group">
                            <label>Company Name:</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>}
                    {type == "merchant" &&
                        <div className="form-group">
                            <label>Company Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>}


                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}>
                        <label>show password</label>
                        <input style={{ height: "20px", width: "20px" }} onChange={() => setShowPassword(!showPassword)}
                            type='checkbox'
                            value={showPassword}>
                        </input>
                    </div>

                    <button type="submit">Register</button>
                </form>
                <span>Already have an account?<Link to={`/login/${type}`}>Login</Link> </span>
                <div>
                    <ul style={{ color: warningColor }}>
                        <li>all fields are required</li>
                        <li>Email should contain "@gmail.com" at the end</li>
                        <li>Phone number should contain 10 digits</li>

                    </ul>
                </div>
            </div>}
        </>

    );
}

export default Register