import Logo from "../../Elements/Logo/Logo"
import Avatar from "../../../assets/images/icon/Avatar.png"
import { Button } from "flowbite-react";
import DropdownMenu from "../../../Pages/dropdown";

const handleDaftarSaya = () => {
    window.location.href = '/daftarsaya';  
}

const handleSeries = () => {
    window.location.href = '/series';  
}



export default function Header() {

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center px-6 py-4 bg-[#0d0d0e]">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
        <ul className="flex space-x-11 font-medium text-sm ml-20">
          <li onClick={handleSeries} className="hover:text-red-500 cursor-pointer">Series</li>
          <li className="hover:text-red-500 cursor-pointer">Film</li>
          <li onClick={handleDaftarSaya} href="#" className="hover:text-red-500 cursor-pointer">Daftar Saya</li>
        </ul>
        <DropdownMenu />
      </nav>
    </div>
  )
}
