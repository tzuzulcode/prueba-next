import Link from 'next/link'

export async function getStaticProps(){
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
      {characters.map(character=><Link href={"/characters/"+character.id} key={character.id}>{character.name}</Link>)}
  </div>;
}
