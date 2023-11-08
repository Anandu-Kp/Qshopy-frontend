import React from 'react'
import ProductForm from '../Components/ProductForm'
import Navbar from '../Components/Common/NavBar'

function AddProduct() {
    return (
        <div className='add-product'>
            <Navbar isMerchant={true} />
            <h2>Add Product</h2>
            <ProductForm isAdding={true} />
        </div>
    )
}

export default AddProduct