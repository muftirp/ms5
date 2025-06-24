import React from 'react'
import CardFilm4 from './CardFilm4.jsx'

const films4 = [
{
    id: 1,
    name: "digimon",
    image: "/images/poster/image15.png",
    price: 100000,
    description: "asdsadsdadsa"
  },
  {
    id: 2,
    name: "pokemon",
    image: "/images/poster/image16.png",
    price: 200000,
    description: "bbbbbbbbbbbbbbbbbbbbbbbb"
  },
  {
    id: 3,
    name: "dragonball",
    image: "/images/poster/image17.png",
    price: 500000,
    description: "cccccccccccccccccccc"
  },
  {
    id: 4,
    name: "naruto",
    image: "/images/poster/image1.png",
    price: 200000,
    description: "ddddddddd"
  },
  {
    id: 5,
    name: "tamiya",
    image: "/images/poster/image2.png",
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


export default function TemplateSection4() {
  return (
    <>
                <div   className="px-6 py-6">
                  <h2 className="text-lg font-semibold mb-4">Rilis Baru</h2>
                  <div className='flex overflow-x-auto space-x-1 scrollbar-hide'>
            {films4.map((film) => (
                    // <div key={film.id} className="overflow-x-auto space-x-4 scrollbar-hide  min-w-[300px] flex-shrink-0 rounded-lg">
                    <CardFilm4 key={film.id}>
                      <CardFilm4.Header image={film.image}/>
                      {/* <CardFilm4.Body name={film.name}>
                        {film.description}</CardFilm4.Body>
                      <CardFilm4.Footer price={film.price} id={film.id}></CardFilm4.Footer> */}
                    </CardFilm4>
                   ))}
                  </div>
                 </div>           
                
                </>
  )
}
