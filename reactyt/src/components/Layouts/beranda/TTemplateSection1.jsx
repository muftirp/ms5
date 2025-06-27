import React, { useState } from 'react'
import CardFilm1 from './CardFilm1.jsx'
import axios from "axios";
import { useEffect } from 'react';



  


export default function TTemplateSection1() {
const [films,setFilms] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  // console.log(API_URL);

  
// useEffect(()=> {
//   fetch(`${API_URL}/users`)
//   .then((response)=>response.json())
//   .then((data) => {
//     console.log(data);
//     setProduct(data);
//   })
//   .catch((error) => {
//     console.error("Error", error)
// });

// },[API_URL]);

useEffect(()=> {
  axios.get(`${API_URL}/films`)
  .then((response) => {
    console.log(response.data);
    setFilms(response.data);
  })
  .catch((error) => {
    console.error('error:', error)
});

},[API_URL]);



  return (
    <>
    <div   className="px-6 py-6">
      <h2 className="text-lg font-semibold mb-4">Melanjutkan Tonton Film</h2>
      <div className='flex overflow-x-auto space-x-1 scrollbar-hide'>
{films.map((film) => (
     
             <CardFilm1 key={film.id}>
               <CardFilm1.Header image={film.gambar}/>
               <CardFilm1.Body judul={film.judul}/>
               </CardFilm1>
            ))}
      </div>
     </div>           
    
    </>
  )
}
