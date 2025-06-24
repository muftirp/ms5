import React from 'react'
import CardFilm2 from './CardFilm2.jsx'
const films2 = [
{
    id: 1,
    name: "digimon",
    image: "/images/poster/image5.png",
    price: 100000,
    description: "asdsadsdadsa"
  },
  {
    id: 2,
    name: "pokemon",
    image: "/images/poster/image6.png",
    price: 200000,
    description: "bbbbbbbbbbbbbbbbbbbbbbbb"
  },
  {
    id: 3,
    name: "dragonball",
    image: "/images/poster/image7.png",
    price: 500000,
    description: "cccccccccccccccccccc"
  },
  {
    id: 4,
    name: "naruto",
    image: "/images/poster/image8.png",
    price: 200000,
    description: "ddddddddd"
  },
  {
    id: 5,
    name: "tamiya",
    image: "/images/poster/image9.png",
    price: 500000,
    description: "eeeeeeeeeee"
  },
{
    id: 6,
    name: "tsubasa",
    image: "/images/poster/image6.png",
    price: 500000,
    description: "cccccccccccccccccccc"
  },
  {
    id: 7,
    name: "hamtaro",
    image: "/images/poster/image7.png",
    price: 200000,
    description: "ffffffffffffffffff"
  },
  {
    id: 8,
    name: "doraemon",
    image: "/images/poster/image8.png",
    price: 500000,
    description: "gggggggggggggggggggggg"
  },
];
export default function TemplateSection2() {
  return (
    <>
        <div   className="px-6 py-6">
          <h2 className="text-lg font-semibold mb-4">Top Rating Film dan Series Hari ini</h2>
          <div className='flex overflow-x-auto space-x-1 scrollbar-hide'>
    {films2.map((film) => (
            // <div key={film.id} className="overflow-x-auto space-x-4 scrollbar-hide  min-w-[300px] flex-shrink-0 rounded-lg">
            <CardFilm2 key={film.id}>
              <CardFilm2.Header image={film.image}/>
              {/* <CardFilm2.Body name={film.name}>
                {film.description}</CardFilm2.Body>
              <CardFilm2.Footer price={film.price} id={film.id}></CardFilm2.Footer> */}
            </CardFilm2>
           ))}
          </div>
         </div>           
        
        </>
  )
}
