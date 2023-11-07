import React from 'react'
import Register from '../Components/Register'
import { useParams } from 'react-router-dom'

function RegisterPage({ type }) {

    const { userType } = useParams()
    return (
        <div className='register-container'>
            <Register type={userType} />
        </div>
    )
}

export default RegisterPage