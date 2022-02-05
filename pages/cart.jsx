import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../components/Products';

export default function cart() {
    const {items} = useSelector(state=>state.cart)
  return <>
      <section>
          <Products products={items}></Products>
      </section>
  </>;
}
