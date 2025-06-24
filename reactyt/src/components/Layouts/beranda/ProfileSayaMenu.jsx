// import Account from "../../../assets/images/icon/Account.png"
import TandaSeru from "../../../assets/images/icon/tandaseru.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function ProfileSayaMenu() {
  return (
    <>
      <div className='px-6 py-6'>
        <h1 className='text-xl font-bold mb-10'>Profile Saya</h1>
        <div className='space-x-1'>
          <div className='space-x-15 flex items-center justify-center mb-5'>
            <button className='bg-gray-600 p-2 rounded-md w-50 h-50'>
              {/* <img src={Account} /> */}
              FOTO PROFILE</button>
            <div className='w-50 m-2'>
              <button className='border-1 border-blue-700 p-2 rounded-full text-blue-50 w-25 hover:text-blue-700'>Ubah Foto</button>
              <button className='mt-10 p-2 rounded-md -ml-5'>+ Maksimal 2MB</button>
            </div>

            <div className='w-125 h-40 ml-auto flex items-center justify-center gap-2 border-1 bg-gray-600 p-2 rounded-md'>
              <div className='mr-2'>
                <img className="w-10 h-10 " src={TandaSeru} />
              </div>
              <div className='flex-row '>
                <h2 className='font-bold mb-2'>
                  Saat ini anda belum berlangganan
                </h2>
                <h3>
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
                </h3>
                <div className='flex ml-auto mt-5 border-1 rounded-full h-7 w-44 justify-center bg-gray-900 '>
                  Mulai Berlangganan
                </div>
              </div>




            </div>
          </div>
          <div>
            <div className='bg-gray-700   border-1 p-2 rounded-md w-100 mb-5'>Nama Pengguna
              <div className="">
                Wiliam
              </div>
            </div>
          </div>
          <div>
            <div className='bg-gray-700 border-1 p-2 rounded-md w-100 mb-5'>Email
              <div className="">
                Wiliam1980@gmail.com
              </div>
            </div>
          </div>
          <div>
            <div className='bg-gray-700 border-1 p-2 rounded-md w-100 mb-5'>Kata Sandi
              <div className="">
                ******************
              </div>
            </div>
          </div>

          <div className="">

            <button className='bg-blue-800 w-22 h-8 rounded-full'>Simpan</button>
          </div>
        </div>

      </div>

    </>
  )
}
