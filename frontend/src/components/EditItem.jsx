import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

function EditItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            const productDetails = {
                name,
                price,
                image
            };
            const updateAPI = await axios.put(`http://localhost:8000/api/products/update/${id}`, productDetails);
            console.log(updateAPI);
            
            setName('');
            setPrice('');
            setImage('');

            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const getDetails = async () => {
      try {
            const res  = await axios.post(`http://localhost:8000/api/products/find/${id}`);
            const updatedata = await res.data.product;
            setName(updatedata.name);
            setPrice(updatedata.price);
            setImage(updatedata.image);
            
      } catch (error) {
          console.error(error);
      }
  };
  

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className='w-full h-screen bg-black py-20 text-green-500'>
            <h2 className='text-center mb-10 text-3xl'>Edit Item</h2>
            <form 
                onSubmit={updateProduct}
                className="w-1/3 h-auto flex flex-col px-10 py-10 mx-auto border-[2px] rounded-xl border-green-500"
            >
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='w-full px-5 py-3 mt-3 border-[2px] rounded-xl border-green-500' 
                    type="text" id="name" name="name"
                />
                <label className='mt-5' htmlFor="price">Price:</label>
                <input 
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    type="number" 
                    className='w-full px-5 py-3 mt-3 border-[2px] rounded-xl border-green-500' 
                    id="price" name="price"
                />
                <label className='mt-5' htmlFor="image">Image URL:</label>
                <input 
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    type="text"
                    className='w-full px-5 py-3 mt-3 border-[2px] rounded-xl border-green-500'  
                    id="image" name="image"
                />
                <button
                    type='submit'
                    className="mt-5 px-5 py-3 bg-green-500 text-white rounded-lg"
                >
                    Update
                </button>
            </form>
        </div>
    );
}

export default EditItem;
