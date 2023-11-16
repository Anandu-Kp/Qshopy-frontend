import React from 'react'
import "./styles.css"
import image from "../../Assets/image.png"
import Button from '../Common/Button'


function Product({ productObj, id, type }) {
    const deleteProduct = () => {

        axios.delete(`${REACT_APP_API}//delete/${productObj._id}`)
            .then((res) => alert("deleted successfully"))
            .catch((err) => err.response ? alert(err.response.data.data) : lert(err.message))
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
                        <Button value="DELETE" onClick={() => deleteProduct()} />
                    </div>
                }
            </div>
        </div>
    )
}

export default Product