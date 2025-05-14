

// import React from "react";
// import image1 from '/src/assets/images/poster/image1.png';
// import image2 from '/src/assets/images/poster/image2.png';
// import image3 from '/src/assets/images/poster/image3.png';
// import image4 from '/src/assets/images/poster/image4.png';
// import image5 from '/src/assets/images/poster/image5.png';
// import image6 from '/src/assets/images/poster/image6.png';

// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
 
// ];



// export default function ImageFilmSlider() {
//   return (
//     <div className="overflow-x-auto whitespace-nowrap p-4 space-x-4 flex">
//       {images.map((src, idx) => (
//         <img
//           key={idx}
//           src={src}
//           alt={`Image ${idx + 1}`}
//           className="inline-block h-48 rounded-lg shadow-md transition-transform hover:scale-105"
//         />
//       ))}
//     </div>
//   );
// }


import React from 'react'

export default function corsel() {
  return (
//     <div class="flex flex-col min-h-screen p-4">
//   <div class="bg-blue-200 p-4">Konten Atas</div>
//   <div class="bg-green-200 p-4">Konten Tengah</div>

//   {/* <!-- Teks di bawah --> */}
//   <div class="mt-auto bg-gray-200 p-4 text-center">
//     Teks di bagian bawah
//   </div>
// </div>
<div class="flex justify-between min-y-screen p-4">
  <div class="bg-blue-200 p-4">Konten Atas</div>
  <div class="bg-green-200 p-4">Konten Tengah</div>

  {/* <!-- Teks di bawah --> */}
  <div class="ml-auto bg-gray-200 p-4 text-center">
    Teks di bagian bawah
  </div>
</div>

  )
}
