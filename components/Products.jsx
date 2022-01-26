import React from 'react';
import Product from './Product';

export default function Products({products}) {
  return <section className='grid grid-cols-3 gap-5'>
        {products.map(product=><Product product={product} key={product.name}/>)}
    </section>;
}
