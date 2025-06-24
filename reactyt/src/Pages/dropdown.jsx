import Avatar from "../assets/images/icon/Avatar.png"
import Account from "../assets/images/icon/account.png"
import loginVariant from "../assets/images/icon/login-variant.png"
import Star from "../assets/images/icon/star.png"

import React, { useState, useRef, useEffect } from "react";


const handleLogout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.href = '/login';
}

const handleProfileSaya = () => {
  window.location.href = '/profilesaya';
}

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Tutup dropdown saat klik di luar komponen
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative ml-auto" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="w-15 h-15 cursor-pointer rounded-full"> <img src={Avatar} />
      </button>


      <div
        className={`absolute mt-0 w-40 -left-25 bg-black rounded-md shadow-lg  transition-all duration-200 ease-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col">
          <li>
            <a onClick={handleProfileSaya}
              href="#"
              className="px-4 py-2 hover:text-blue-800  text-sm flex items-center gap-2"
            >
              <span><img className="hover:bg-blue-800" src={Account} /></span> Profile Saya
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 hover:text-blue-800  text-sm flex items-center gap-2"
            >
              <span><img className="hover:bg-blue-800" src={Star} /></span> Ubah Premium
            </a>
          </li>
          <li>
            <a onClick={handleLogout}
              href="#"
              className="px-4 py-2 hover:text-blue-800   text-sm flex items-center gap-2 "
            >
              <span><img className="hover:bg-blue-800" src={loginVariant} /></span> Keluar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;