import React from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products';
import {} from '@stripe/react-stripe-js'
import { useEffect } from 'react';
import { emptyCart, saveCart } from '../features/Cart';
//import {loadStripe} from '@stripe/stripe-js'
//import { Elements ,PaymentElement} from '@stripe/react-stripe-js';

//const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

import {PayPalScriptProvider,PayPalButtons,FUNDING} from '@paypal/react-paypal-js'

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

    const createOrder = async () =>{
        const {data} = await axios.post("/api/paypal/createOrder")
        return data.orderID
    }
    const captureOrder = async (data) =>{
        console.log(data)
        dispatch(emptyCart())
        dispatch(saveCart())
        return await axios.post("/api/paypal/captureOrder",{orderID:data.orderID})
    }

    return <>
        <section>
            {logged?<Products products={items}></Products>:
            <p>Inicia sesión para agregar al carrito</p>
            }
            
            {logged&&<div>
                <form action='/api/payment/create-checkout-session' method='POST'>
                    <button className='mt-10 bg-yellow-200 py-2 px-5 rounded-md hover:bg-yellow-300'>Pagar</button>
                </form>
                <PayPalScriptProvider
                    options={{
                        'client-id':process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                        'currency':"USD"
                    }}
                >
                    <PayPalButtons 
                        style={{
                            color:"black",
                            shape:"rect",
                            label:"buynow",
                            height:25
                        }}
                        fundingSource={FUNDING.PAYPAL}
                        createOrder={createOrder}
                        onApprove={captureOrder}
                    />
                </PayPalScriptProvider>
            </div>}
        </section>
    </>;
}
