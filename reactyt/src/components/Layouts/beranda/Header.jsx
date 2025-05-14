import Logo from "../../Elements/Logo/Logo"
import Avatar from "../../../assets/images/icon/Avatar.png"

export default function Header() {
  return (
    <div>
      {/* Navbar */}
          <nav className="flex justify-between items-center px-6 py-4 bg-[#0d0d0e]">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            <ul className="flex space-x-10 font-medium text-sm">
              <li className="hover:text-red-500 cursor-pointer">Series</li>
              <li className="hover:text-red-500 cursor-pointer">Film</li>
              <li className="hover:text-red-500 cursor-pointer">Daftar Saya</li>
            </ul>
            <div className="flex">
              <button className="w-15 h-15 rounded-full cursor-pointer"> <img src={Avatar} /></button>
            </div>
          </nav>
          </div>
  )
}
