// import banner1 from "../assets/images/poster/banner1.png";
// import Information from "../assets/images/icon/information.png";
// import VolumeOff from "../assets/images/icon/volume-off.png";
import Footer from "../components/Layouts/beranda/Footer.jsx";
import Header from "../components/Layouts/beranda/Header.jsx";
import HeroSection from "../components/Layouts/beranda/HeroSection.jsx";
import TemplateSection from "../components/Layouts/beranda/TemplateSection.jsx";

export default function HomePage() {
  return (
    <div className="bg-[#0d0d0e] text-white min-h-screen">
      <Header />
      <HeroSection/>
      {/* Section Template */}
      <TemplateSection />

      <Footer />
    </div>
  );
}
