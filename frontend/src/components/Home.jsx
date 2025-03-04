import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [products, setProducts] = useState(null);
    const navigate = useNavigate();

    const getData = async () => {
        const res = await axios.get('http://localhost:8000/api/products/get')
        setProducts(res.data.products)
    }

    useEffect(() => {
        getData();
    }, []);

    const deleteItem = async (id) => {
        const deletePro = await axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        getData();
    }

    const editItem = (id) => {
        navigate(`edit/${id}`);
    }

  return (
    <div className='w-full h-screen bg-black py-20'>
        <button 
        className='px-5 py-2 rounded-lg bg-green-500 text-white mx-5'
        onClick={()=>navigate('/add')}>Add Item</button>

        <div className='w-full h-auto px-10 py-10'>
            {products && products.map((product, index) => (
                <div 
                className='py-5 px-10 rounded-lg bg-gray-700 inline-block mx-5 my-5'
                key={index}>
                    <h1 className='text-white'>{product.name}</h1>
                    <img 
                    className='w-full h-40 py-3 object-cover'
                    src={product.image} alt="" />
                    <h1 className='text-white'>{product.price}</h1>

                    <button
                    onClick={() => deleteItem(product._id)}
                    className='px-5 py-2 rounded-lg bg-red-500 text-white mx-5 mt-5'
                    >Delete</button>
                    <button
                    onClick={() => editItem(product._id)}
                    className='px-5 py-2 rounded-lg bg-green-500 text-white mx-5 mt-5'
                    >Edit</button>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Home