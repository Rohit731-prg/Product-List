import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductInsert() {
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState({
        name: '',
        price: '',
        image: ''
    })
    const handel = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/products/insert', productDetails)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        setProductDetails({
            name: '',
            price: '',
            image: ''
        })
    }
  return (
    <div className='w-full h-screen bg-black py-20'>
        <form 
        onSubmit={handel}
        className="w-1/3 h-auto px-10 py-10 mx-auto border-[2px] rounded-xl border-green-500">
            <input 
            value={productDetails.name}
            onChange={(e) => setProductDetails({...productDetails, name: e.target.value})}
            placeholder='Product Name' 
            className='w-full p-5 border-[2px] rounded-xl border-green-500 mb-10' 
            type="text" />
            <input 
            value={productDetails.price}
            onChange={(e) => setProductDetails({...productDetails, price: e.target.value})}
            placeholder='Product Price' 
            className='w-full p-5 border-[2px] rounded-xl border-green-500 mb-10' 
            type="text" />
            <input 
            value={productDetails.image}
            onChange={(e) => setProductDetails({...productDetails, image: e.target.value})}
            placeholder='Product Image URL' 
            className='w-full p-5 border-[2px] rounded-xl border-green-500 mb-10' 
            type="text" />
            
            <button 
            className='text-green-500 w-full'
            type='submit'>Save</button>

            <button
            onClick={() => navigate('/')}
            className='text-green-500 w-full mt-10'
            >Products</button>
        </form>
    </div>
  )
}

export default ProductInsert