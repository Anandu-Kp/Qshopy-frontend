import React from 'react'
import "./styles.css"
import Product from '../Product'
function Dashboard({ type, productList }) {
    console.log(productList);
    return (
        <div className='product-container'>


            {
                productList.map((element, id) =>
                    <Product productObj={element} key={id} />

                )
            }
        </div>
    )
}

export default Dashboard