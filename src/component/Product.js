import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products,getProducts] = useState([]);
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(result=>getProducts(result))
    },[]);

    const cards = products.map((item)=>(
         <div className='products-data' key={item.id}>
            <img src={item.image} />
            <p>{item.category}</p>
            <p>Rs. {item.price}</p>
            <button>Add To Cart</button>
        </div>
       
    ));


  return (
    <>
    <h1>Product Dashboard </h1>
  
    <div className='products-details'>
      {
        cards
      }
    </div>
    </>
  )
}

export default Product
