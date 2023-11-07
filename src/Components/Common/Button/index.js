import React from 'react'
import "./styles.css"

function Button({ value, onClick }) {
    return (
        <div className='btn'>
            <button onClick={onClick}>{value}</button>

        </div>
    )
}

export default Button