import axios from "axios";
import { useEffect, useState } from 'react';


// export const login  = (data, callback) => {
//     axios.post('https://685d247c769de2bf085f85f1.mockapi.io/', data)
//     .then((res) => {
//         callback(true,res.data)
//     })
//     .catch((error)=>{
//         callback(false,error);
//     });
// }; 


// const [films,setFilms] = useState([]);
//   const API_URL = import.meta.env.VITE_API_URL;
//   // console.log(API_URL);

  
// // useEffect(()=> {
// //   fetch(`${API_URL}/users`)
// //   .then((response)=>response.json())
// //   .then((data) => {
// //     console.log(data);
// //     setProduct(data);
// //   })
// //   .catch((error) => {
// //     console.error("Error", error)
// // });

// // },[API_URL]);

// useEffect(()=> {
//   axios.get(`${API_URL}/films`)
//   .then((response) => {
//     console.log(response.data);
//     setFilms(response.data);
//   })
//   .catch((error) => {
//     console.error('error:', error)
// });

// },[API_URL]);


