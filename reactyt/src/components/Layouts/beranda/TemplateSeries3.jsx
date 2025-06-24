import React from 'react'
import CardSeries3 from './CardSeries3.jsx'
const series3 = [
{
    id: 1,
    name: "digimon",
    image: "/images/poster/image4.png",
    price: 100000,
    description: "asdsadsdadsa"
  },
  {
    id: 2,
    name: "pokemon",
    image: "/images/poster/image3.png",
    price: 200000,
    description: "bbbbbbbbbbbbb"
  },
  {
    id: 3,
    name: "dragonball",
    image: "/images/poster/image2.png",
    price: 500000,
    description: "ccccccccccccc"
  },
  {
    id: 4,
    name: "naruto",
    image: "/images/poster/image6.png",
    price: 200000,
    description: "ddddddddd"
  },
  {
    id: 5,
    name: "tamiya",
    image: "/images/poster/image7.png",
    price: 500000,
    description: "eeeeeeeeeee"
  },
{
    id: 6,
    name: "tsubasa",
    image: "/images/poster/image8.png",
    price: 500000,
    description: "cccccccccccccccccccc"
  },
  {
    id: 7,
    name: "hamtaro",
    image: "/images/poster/image9.png",
    price: 200000,
    description: "ffffffffffffffffff"
  },
  {
    id: 8,
    name: "doraemon",
    image: "/images/poster/image10.png",
    price: 500000,
    description: "gggggggggggggggg"
  },
];
export default function TemplateSeries3() {
  return (
     <>
        <div   className="px-6 py-6">
          <h2 className="text-lg font-semibold mb-4">Top Rating Series Hari ini</h2>
          <div className='flex overflow-x-auto space-x-1 scrollbar-hide'>
    {series3.map((film) => (
            // <div key={film.id} className="overflow-x-auto space-x-4 scrollbar-hide  min-w-[300px] flex-shrink-0 rounded-lg">

            <CardSeries3 key={film.id}>
              <CardSeries3.Header image={film.image}/>
              {/* <CardFilm1.Body name={film.name}>
                {film.description}</CardFilm1.Body>
              <CardFilm1.Footer price={film.price} id={film.id}></CardFilm1.Footer> */}
            </CardSeries3>
           ))}
          </div>
         </div>           
        
        </>
  )
}
