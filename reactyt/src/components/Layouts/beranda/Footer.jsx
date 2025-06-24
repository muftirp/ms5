import Logo from "../../Elements/Logo/Logo"
export default function Footer() {
  return (
    <div>
      <hr className="border-gray-600" />
      <footer className="bg-[#0d0d0e] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        {/* Logo dan Hak Cipta */}
        <div className="mb-6 md:mb-0 flex flex-col ">
          <Logo />
          <span className="ml-2 text-sm text-gray-400 my-2">© 2025 Chill. All rights reserved.</span>
        </div>

        {/* Genre */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Genre</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
          </div>
          <div>
            <ul className="mt-6 sm:mt-8 space-y-1 text-gray-400">
              <li>Drama</li>
              <li>Fantasi Ilmiah &</li>
              <li>Fantasi</li>
              <li>Kejahatan</li>
            </ul>
          </div>
          <div>
            <ul className="mt-6 sm:mt-8 space-y-1 text-gray-400">
              <li>kDrama</li>
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
            </ul>
          </div>
          <div>
            <ul className="mt-6 sm:mt-8 space-y-1 text-gray-400">
              <li>Romantis</li>
              <li>Sains & Alam Ilmiah &</li>
              <li>Thriller</li>
            </ul>
          </div>
        </div>

        {/* Bantuan */}
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Bantuan</h4>
          <ul className="space-y-1 text-gray-400">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}
