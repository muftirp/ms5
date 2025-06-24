import React from 'react'
import CardFilm3 from './CardFilm3.jsx'

const films3 = [
{
    id: 1,
    name: "digimon",
    image: "/images/poster/image10.png",
    price: 100000,
    description: "asdsadsdadsa"
  },
  {
    id: 2,
    name: "pokemon",
    image: "/images/poster/image11.png",
    price: 200000,
    description: "bbbbbbbbbbbbbbbbbbbbbbbb"
  },
  {
    id: 3,
    name: "dragonball",
    image: "/images/poster/image12.png",
    price: 500000,
    description: "cccccccccccccccccccc"
  },
  {
    id: 4,
    name: "naruto",
    image: "/images/poster/image13.png",
    price: 200000,
    description: "ddddddddd"
  },
  {
    id: 5,
    name: "tamiya",
    image: "/images/poster/image14.png",
    price: 500000,
    description: "eeeeeeeeeee"
  },
{
    id: 6,
    name: "tsubasa",
    image: "/images/poster/image16.png",
    price: 500000,
    description: "cccccccccccccccccccc"
  },
];
export default function DaftarSayaTemplateProfile() {
  return (
     <>
        <div   className="px-6 py-6">
          <div className='flex items-center justify-between mb-4'>
          <h2 className="text-lg font-semibold mb-2">Daftar Saya</h2>
          <h3 className='text-gray-400 hover:text-amber-200 hover:cursor-pointer'>Lihat Semua</h3>
          </div>
          
          <div className='grid grid-cols-3 sm:grid-cols-6 gap-1 overflow-x-auto space-x-1 scrollbar-hide'>
    {films3.map((film) => (
            // <div key={film.id} className="overflow-x-auto space-x-4 scrollbar-hide  min-w-[300px] flex-shrink-0 rounded-lg">

            <CardFilm3 key={film.id}>
              <CardFilm3.Header image={film.image}/>
              {/* <CardFilm3.Body name={film.name}>
                {film.description}</CardFilm3.Body>
              <CardFilm3.Footer price={film.price} id={film.id}></CardFilm3.Footer> */}
            </CardFilm3>
           ))}
          </div>
         </div>           
        
        </>
  )
}

