import Footer from "../components/Layouts/beranda/Footer.jsx";
import Header from "../components/Layouts/beranda/Header.jsx";
import TemplateSeries1 from "../components/Layouts/beranda/TemplateSeries1.jsx";
import TemplateSeries2 from "../components/Layouts/beranda/TemplateSeries2.jsx";
import TemplateSeries3 from "../components/Layouts/beranda/TemplateSeries3.jsx";
import TemplateSeries4 from "../components/Layouts/beranda/TemplateSeries4.jsx";
import TemplateSeries5 from "../components/Layouts/beranda/TemplateSeries5.jsx";

export default function series() {
  return (
    <div className="bg-[#0d0d0e] text-white min-h-screen">
      <Header />
          <TemplateSeries1 />
          <TemplateSeries2 />
          <TemplateSeries3 />
          <TemplateSeries4 />
          <TemplateSeries5 />
          <Footer />
        </div>
  )
}
