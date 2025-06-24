import Footer from "../components/Layouts/beranda/Footer.jsx";
import Header from "../components/Layouts/beranda/Header.jsx";
import DaftarSayaTemplate from "../components/Layouts/beranda/DaftarSayaTemplate.jsx";


export default function DaftarSaya() {
  return (
    <div className="bg-[#0d0d0e] text-white min-h-screen">
      <Header />
      <DaftarSayaTemplate />
      <Footer />
    </div>
  );
}
