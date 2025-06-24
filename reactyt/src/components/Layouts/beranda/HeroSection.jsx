import banner1 from '/src/assets/images/poster/banner1.png';
import Information from '/src/assets/images/icon/information.png';
import VolumeOff from '/src/assets/images/icon/volume-off.png';



export default function HeroSection() {

  return (
    <div>
      
      <section className="  bg-cover bg-center h-[60vh] flex items-end p-8" style={{ backgroundImage: `url(${banner1})` }}>

        <div className="mt-85 h-58  absolute inset-0 bg-gradient-to-t from-black to-transparent">

        <div className="flex-col p-5 ">
          <h1 className="text-3xl font-bold mb-2">Duty After School</h1>
          <p className="text-gray-300 text-sm ">Siswa terpaksa ikut angkatan militer karena alienSiswa terpaksa ikut angkatan militer karena alien...</p>
        </div>

          <div className="flex justify-between  mt-2 p-5 gap-2">
            <div className="bg-blue-700 text-white px-4 py-2 rounded-4xl cursor-pointer">Mulai</div>
            <div className="bg-gray-700 px-4 py-2 rounded-4xl flex items-center justify-center gap-2 cursor-pointer"><img src={Information} className="w-5 h-5 mt-1 cursor-pointer" />Selengkapnya</div>
            <div className="px-3 py-2 rounded-4xl bg-transparent border-1">18+</div>
            {/* <!-- Teks di ujung kanan --> */}
            <div className="ml-auto rounded-4xl cursor-pointer flex items-center justify-center gap-2 border-1"><img className="w-10 h-10 " src={VolumeOff} /></div>
          </div>

        </div>


        



      </section>

    </div>
  )
}
