import React from 'react';

export default function Product({product}) {
  return <article className='bg-gray-100 shadow-md'>
        <div className='p-2'>
            <h3 className='text-2xl font-bold'>{product.name}</h3>
            <p className='my-3'>{product.description}</p>
        </div>
        <img src={product.img}></img>
    </article>;
}
