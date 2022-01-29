import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../components/Page';
import Products from '../components/Products';

export default function cart() {
    const {cart} = useSelector(state=>state)
  return <Page>
      <section>
          <Products products={cart}></Products>
      </section>
  </Page>;
}
