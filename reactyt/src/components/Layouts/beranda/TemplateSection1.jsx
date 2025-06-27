import React from 'react'
import CardFilm1 from './CardFilm1.jsx'


const films1 = [
{
    id: 1,
    name: "digimon",
    image: "/images/poster/image1.png",
    price: 100000,
    description: "asdsadsdadsa"
  },
  {
    id: 2,
    name: "pokemon",
    image: "/images/poster/image2.png",
    price: 200000,
    description: "bbbbbbbbbbbbb"
  },
  {
    id: 3,
    name: "dragonball",
    image: "/images/poster/image3.png",
    price: 500000,
    description: "ccccccccccccc"
  },
  {
    id: 4,
    name: "naruto",
    image: "/images/poster/image4.png",
    price: 200000,
    description: "ddddddddd"
  },
  {
    id: 5,
    name: "tamiya",
    image: "/images/poster/image5.png",
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
    description: "gggggggggggggggg"
  },
];


export default function TemplateSection1() {
  return (
    <>
    <div   className="px-6 py-6">
      <h2 className="text-lg font-semibold mb-4">Melanjutkan Tonton Film</h2>
      <div className='flex overflow-x-auto space-x-1 scrollbar-hide'>
{films1.map((film) => (

        <CardFilm1 key={film.id}>
          <CardFilm1.Header image={film.image}/>
          </CardFilm1>
       ))}
      </div>
     </div>           
    
    </>
  )
}
