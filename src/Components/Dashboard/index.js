import React, { useState } from 'react'
import "./styles.css"
import Product from '../Product'
function Dashboard({ type, productList }) {
    const [isDeleted, setIsDeleted] = useState(false);
    console.log(productList);
    return (
        <div className='product-container'>


            {
                productList.map((element, id) =>
                    <Product productObj={element} key={id} type={type} setIsDeleted={setIsDeleted} isDeleted={isDeleted} />

                )
            }
        </div>
    )
}

export default Dashboard