import React from 'react'
import { useParams } from 'react-router-dom'
import Login from '../Components/Login';

function LoginPage() {
    const { userType } = useParams()
    console.log(window.location.href, userType);
    return (
        <div className='login-container'>
            <Login type={userType} />
        </div>
    )
}

export default LoginPage