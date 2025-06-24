import DaftarSayaTemplate from "../components/Layouts/beranda/DaftarSayaTemplate.jsx";
import Footer from "../components/Layouts/beranda/Footer.jsx";
import Header from "../components/Layouts/beranda/Header.jsx";
import ProfileSayaMenu from "../components/Layouts/beranda/ProfileSayaMenu.jsx";
import DaftarSayaTemplateProfile from "../components/Layouts/beranda/DaftarSayaTemplateProfile.jsx";


export default function profileSaya() {
  return (
    <div className="bg-[#0d0d0e] text-white min-h-screen">
      <Header />
      <ProfileSayaMenu />
        <DaftarSayaTemplateProfile />
      <Footer />
    </div>
  )
}
