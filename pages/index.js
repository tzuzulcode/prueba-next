import { useState } from 'react'
import Saludo from '../components/Saludo'
import Link from 'next/link'

export default function Home() {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <p className=' text-yellow-400 text-3xl'>Prueba tailwind</p>
      {open&&<p>Hola!!!</p>}
      <button onClick={()=>{setOpen(!open)}}>Presionar</button>
      <Saludo/>

      <Link href="/characters">Ir a personajes</Link>
      <Link href="/charactersSSR">Ir a personajes SSR</Link>
    </div>
  )
}
