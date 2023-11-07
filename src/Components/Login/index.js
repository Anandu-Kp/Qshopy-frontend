import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./styles.css"

function Login({ type }) {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [showPassword, setShowPassword] = useState(false)


    const handlesubmit = (event) => {
        event.preventDefault();
        let userObj = {
            email,
            password
        }
        setEmail("");
        setPassword("");
        axios.post(`http://localhost:3002/${type}/login`, userObj)
            .then((response) => {
                // console.log(response);
                if (response.status == 201) {
                    localStorage.setItem("token", response.data.data.token)
                    window.location.href = `/${type}/dashboard`
                }
                else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                alert(error.response.data.message)
                if (!error.response.data.data) window.location.href = "/register/user"

            })
    }

    return (
        <div>
            <div className="registration-form">
                <h2 className='register-title'>Login</h2>
                <form onSubmit={handlesubmit}>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />




                    </div>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }}>
                        <label>show password</label>
                        <input style={{ height: "20px", width: "20px" }} onChange={() => setShowPassword(!showPassword)}
                            type='checkbox'
                            value={showPassword}>
                        </input>
                    </div>

                    <button type="submit">login</button>
                </form>
                <span>Dont have an account?<Link to={"/register/user"}>Register</Link> </span>
            </div>
        </div>
    )
}

export default Login