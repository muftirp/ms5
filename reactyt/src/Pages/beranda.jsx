// import banner1 from "../assets/images/poster/banner1.png";
// import Information from "../assets/images/icon/information.png";
// import VolumeOff from "../assets/images/icon/volume-off.png";
import { useEffect } from "react";
import Footer from "../components/Layouts/beranda/Footer.jsx";
import Header from "../components/Layouts/beranda/Header.jsx";
import HeroSection from "../components/Layouts/beranda/HeroSection.jsx";
import TemplateSection from "../components/Layouts/beranda/TemplateSection.jsx";


export default function HomePage() {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_URL);

  
// useEffect(()=> {
//   fetch(`${API_URL}/users`)
//   .then((response)=>response.json())
//   .then((data) => {
//     console.log(data);
//   });
// })



  return (
    <div className="bg-[#0d0d0e] text-white min-h-screen">
      <Header />

      <HeroSection/>

      <TemplateSection />

      <Footer />

    
      
    </div>
  );
}
