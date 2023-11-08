import React from 'react'
import "./styles.css"
import image from "../../Assets/image.png"
import Button from '../Common/Button'


function Product({ productObj, id, type }) {
    const deleteProduct = () => {
        console.log(productObj);
    }
    return (
        <div className='product' key={id}>
            <img src={image}></img>
            <div className='product-main'>
                <div className='product-main-left'>
                    <span className='product-name'>{productObj.name}</span>
                    <span className='product-category'>{productObj.category},{productObj.sub_category}</span>
                </div>
                <div className='product-main-right'>
                    <span className='product-price'>Rs.{productObj.price}</span>
                </div>
                {type == "merchant" &&
                    <div className='product-footer'>
                        <Button value="EDIT" onClick={() => window.location.href = "/edit"} />
                        <Button value="DELETE" onClick={() => deleteProduct()} />
                    </div>
                }
            </div>
        </div>
    )
}

export default Product