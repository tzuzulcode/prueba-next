import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [show,setShow] = useState(false)
  const {items:cart} = useSelector((state)=>state.cart)

  return <nav className='bg-white shadow-md mb-5 py-3 px-5 sm:px-0'>
      <div className='flex justify-between max-w-4xl mx-auto'>
        <Link href={"/"}>Inicio</Link>
        
        <ul className={`gap-5 ${show?"flex":"hidden"} sm:flex`}>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/auth">Auth</Link></li>
            <li><Link href="/cart"><p>Carrito {cart.length}</p></Link></li>
        </ul>
        <button className='sm:hidden' onClick={()=>{setShow(!show)}}>Menu</button>
      </div>
  </nav>;
}
