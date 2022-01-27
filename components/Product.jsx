import React from 'react';
import { motion } from "framer-motion"

export default function Product({product}) {
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
        </div>
        <img src={product.img}></img>
    </motion.article>;
}
