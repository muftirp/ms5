// import Account from "../../../assets/images/icon/Account.png"
// import TandaSeru from "../../../assets/images/icon/tandaseru.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function ProfileSayaMenu() {
//   return (
//     <>
//       <div className='px-6 py-6'>
//         <h1 className='text-xl font-bold mb-10'>Profile Saya</h1>
//         <div className='space-x-1'>
//           <div className='space-x-15 flex items-center justify-center mb-5'>
//             <button className='bg-gray-600 p-2 rounded-md w-50 h-50'>
//               {/* <img src={Account} /> */}
//               FOTO PROFILE</button>
//             <div className='w-50 m-2'>
//               <button className='border-1 border-blue-700 p-2 rounded-full text-blue-50 w-25 hover:text-blue-700'>Ubah Foto</button>
//               <button className='mt-10 p-2 rounded-md -ml-5'>+ Maksimal 2MB</button>
//             </div>

//             <div className='w-125 h-40 ml-auto flex items-center justify-center gap-2 border-1 bg-gray-600 p-2 rounded-md'>
//               <div className='mr-2'>
//                 <img className="w-10 h-10 " src={TandaSeru} />
//               </div>
//               <div className='flex-row '>
//                 <h2 className='font-bold mb-2'>
//                   Saat ini anda belum berlangganan
//                 </h2>
//                 <h3>
//                   Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
//                 </h3>
//                 <div className='flex ml-auto mt-5 border-1 rounded-full h-7 w-44 justify-center bg-gray-900 '>
//                   Mulai Berlangganan
//                 </div>
//               </div>




//             </div>
//           </div>
//           <div>
//             <div className='bg-gray-700   border-1 p-2 rounded-md w-100 mb-5'>Nama Pengguna
//               <div className="">
//                 Wiliam
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className='bg-gray-700 border-1 p-2 rounded-md w-100 mb-5'>Email
//               <div className="">
//                 Wiliam1980@gmail.com
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className='bg-gray-700 border-1 p-2 rounded-md w-100 mb-5'>Kata Sandi
//               <div className="">
//                 ******************
//               </div>
//             </div>
//           </div>

//           <div className="">

//             <button className='bg-blue-800 w-22 h-8 rounded-full'>Simpan</button>
//           </div>
//         </div>

//       </div>

//     </>
//   )
// }

import { useEffect, useState } from "react";
import TandaSeru from "../../../assets/images/icon/tandaseru.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ProfileSayaMenu() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("********");
  const [avatar, setAvatar] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const navigate = useNavigate();

  // Ambil data user dari localStorage & API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      fetch(`${import.meta.env.VITE_API_URL}/users?username=${storedUser.username}`)
        .then(res => res.json())
        .then(data => {
          const foundUser = data[0];
          if (foundUser) {
            setUser(foundUser);
            setName(foundUser.name);
            setEmail(foundUser.email);
            setPassword(foundUser.password);
            setAvatar(foundUser.avatar || "");
          }
        })
        .catch(err => {
          console.error(err);
          toast.error("Gagal memuat data user");
        });
    }
  }, []);

  const handleUpdate = async () => {
    if (!user) return;
    try {
      const updated = {
        ...user,
        name,
        email,
        password,
        avatar: newAvatar || avatar,
      };

      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (res.ok) {
        toast.success("Profil berhasil diperbarui");
        const result = await res.json();
        setUser(result);
        localStorage.setItem("user", JSON.stringify(result));
      } else {
        toast.error("Gagal memperbarui profil");
      }
    } catch (err) {
      console.error(err);
      toast.error("Terjadi kesalahan");
    }
  };

  const handleDelete = async () => {
    if (!user) return;
    if (!confirm("Apakah Anda yakin ingin menghapus akun ini?")) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${user.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        localStorage.removeItem("user");
        toast.success("Akun berhasil dihapus");
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error("Gagal menghapus akun");
      }
    } catch (err) {
      console.error(err);
      toast.error("Terjadi kesalahan saat menghapus akun");
    }
  };

  if (!user) return <div className="p-10 text-white">Memuat profil...</div>;

  return (
    <div className='px-6 py-6 text-white'>
      <h1 className='text-xl font-bold mb-10'>Profile Saya</h1>

      <div className='flex items-center justify-between mb-5'>
        <div className='text-center'>
          <img src={newAvatar || avatar || "https://via.placeholder.com/100"} className="w-32 h-32 rounded-full mb-2" alt="avatar" />
          <input
            type="text"
            className="bg-gray-800 p-1 rounded text-sm w-48"
            placeholder="URL foto baru"
            value={newAvatar}
            onChange={(e) => setNewAvatar(e.target.value)}
          />
        </div>

        <div className='flex items-center gap-2 bg-gray-600 p-3 rounded-md ml-auto'>
          <img className="w-10 h-10" src={TandaSeru} alt="!" />
          <div>
            <h2 className='font-bold mb-1'>Saat ini anda belum berlangganan</h2>
            <p>Dapatkan akses tak terbatas ke ribuan film!</p>
            <div className='mt-2 px-3 py-1 rounded-full bg-gray-900 text-center w-fit text-sm'>
              Mulai Berlangganan
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-700 border p-3 rounded-md mb-4'>
        <label>Nama Pengguna</label>
        <input
          className="bg-transparent border border-gray-500 rounded p-1 w-full mt-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='bg-gray-700 border p-3 rounded-md mb-4'>
        <label>Email</label>
        <input
          className="bg-transparent border border-gray-500 rounded p-1 w-full mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='bg-gray-700 border p-3 rounded-md mb-6'>
        <label>Kata Sandi</label>
        {isEditingPassword ? (
          <input
            className="bg-transparent border border-gray-500 rounded p-1 w-full mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        ) : (
          <div className="flex justify-between mt-1">
            <div>**************</div>
            <button className="text-blue-400 text-sm" onClick={() => setIsEditingPassword(true)}>
              Ubah Sandi
            </button>
          </div>
        )}
      </div>

      <div className='flex items-center justify-between gap-4'>
        <button onClick={handleUpdate} className='bg-blue-800 px-6 py-2 rounded-full'>
          Simpan
        </button>
        <button onClick={handleDelete} className='bg-red-700 px-6 py-2 rounded-full'>
          Hapus Akun
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
