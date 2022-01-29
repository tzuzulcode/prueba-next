import React from 'react';
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../features/Cart';

export default function Product({product}) {
    const dispatch = useDispatch()
    const agregarAlCarrito = () =>{
        dispatch(addToCart(product))
    }

    const removerDelCarrito= () =>{
        dispatch(removeFromCart(product))
    }

  return <motion.article
        initial={{
            opacity:0
        }}
        transition={{
            duration:2
        }}
        animate={{
            opacity:1
        }}
        className='bg-white shadow-md'>
        <div className='p-2'>
            <h3 className='text-2xl font-bold'>{product.name}</h3>
            <p className='my-3'>{product.description}</p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button onClick={removerDelCarrito}>Remover del carrito</button>
        </div>
        <img src={product.img}></img>
    </motion.article>;
}
