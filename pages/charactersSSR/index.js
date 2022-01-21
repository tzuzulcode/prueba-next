import React from 'react';
import Link from 'next/link';
//SSR
export async function getServerSideProps(){
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const characters = await res.json()

    return {
        props:{
            characters: characters.results
        }
    }
}

export default function index({characters}) {
  return <div>
  {characters.map(character=><Link href={"/charactersSSR/"+character.id} key={character.id}>{character.name}</Link>)}
</div>;
}
