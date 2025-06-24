// import banner1 from "../assets/images/poster/banner1.png";
// import Information from "../assets/images/icon/information.png";
// import VolumeOff from "../assets/images/icon/volume-off.png";
import Footer from "../components/Layouts/beranda/Footer.jsx";
import Header from "../components/Layouts/beranda/Header.jsx";
import HeroSection from "../components/Layouts/beranda/HeroSection.jsx";
import TemplateSection from "../components/Layouts/beranda/TemplateSection.jsx";
import TemplateSection1 from "../components/Layouts/beranda/TemplateSection1.jsx";
import TemplateSection2 from "../components/Layouts/beranda/TemplateSection2.jsx";
import TemplateSection3 from "../components/Layouts/beranda/TemplateSection3.jsx";
import TemplateSection4 from "../components/Layouts/beranda/TemplateSection4.jsx";
export default function HomePage() {
  return (
    <div className="bg-[#0d0d0e] text-white min-h-screen">
       <Header />

      <HeroSection/>

      <TemplateSection1 />
      <TemplateSection2 />
      <TemplateSection3 />
      <TemplateSection4 />
      <Footer />


    </div>
  );
}