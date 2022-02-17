import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products';
import {} from '@stripe/react-stripe-js'
import { useEffect } from 'react';
import { emptyCart, saveCart } from '../features/Cart';
//import {loadStripe} from '@stripe/stripe-js'
//import { Elements ,PaymentElement} from '@stripe/react-stripe-js';

//const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

export default function Cart() {
    const {cart:{items},auth:{logged,loading}} = useSelector(state=>state)
    const dispatch = useDispatch()
    useEffect(()=>{
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            if(!loading && logged){
                dispatch(emptyCart())
                dispatch(saveCart())
            }
        }
        if (query.get('canceled')) {
            console.log("Cancelado")
        }
    },[loading])

    return <>
        <section>
            {logged?<Products products={items}></Products>:
            <p>Inicia sesión para agregar al carrito</p>
            }
            
            {logged&&<div>
                <form action='/api/payment/create-checkout-session' method='POST'>
                    <button className='mt-10 bg-yellow-200 py-2 px-5 rounded-md hover:bg-yellow-300'>Pagar</button>
                </form>
            </div>}
        </section>
    </>;
}
