import { Link, useNavigate } from "react-router-dom";
import pass from "../assets/images/icon/eye.png";
import icongoogle from "../assets/images/icon/google.png";
import Logo from "../components/Elements/Logo/Logo";
import Description from "../components/Elements/Logo/Description";
import Label from "../components/Elements/Input/Label";
import Input from "../components/Elements/Input/Input";
import Button from "../components/Elements/Button";
import InputForm from "../components/Elements/Input";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function RegisterPage() {
  const navigate = useNavigate();
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
     e.preventDefault();
    //validasi input kosong
    console.log("tes register");
    if (!username.trim() || !password.trim()) {
      toast.error("Harap lengkapi semua data yang dibutuhkan!");
      return;
    }

    // //validasi email
    // const emailRegex =  /^\S+@\S+\.\S+$/ ;
    // if(!emailRegex.test(email)) {
    //   toast.error("format email salah!");
    //   return;
    // }
    //validasi password
    if (password.length < 6) {
      toast.error("password must be at least 6 characters");
  return;
    }


    const newUser = { username, password };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

        const data = await response.json();

      //handle response dari server
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message:${errorData.message}`);
      }

      //simpan data user ke localStorage
      const userData = { username: data.username, 
        password: data.password 
      };
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("pendaftaran berhasil! Silahkan cek email anda untuk verifikasi.");
      //redirect ke halaman login
      // window.location.href = '/login';
      // navigate("/login");
    } catch (error) {
      toast.error(error.message || "Terjadi kesalaha pada server")
      return;
    }
    

  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/masuk.png')" }}
    >
      <form onSubmit={handleRegister}
        className="bg-black/74 bg-opacity-60 p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2 flex justify-center items-center">
            <Logo />
          </div>
          <Description ket="Daftar" desc="Selamat datang!" >
          </Description>
        </div>

        <div className="mb-4">
          <InputForm 
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username" />
        </div>
        {/* <div className="mb-4">
          <Label text="Username" />
          <Input type="password"
            placeholder="Masukkan username" />
        </div> */}
        <div className="mb-4 relative">
          <span className="absolute right-3 top-8.5 text-gray-400 cursor-pointer"onClick={() => setShowPassword(!showPassword)}><img src={pass} alt="" className="mt-1" /></span>
          <InputForm  
            label="Kata Sandi"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi" >

          </InputForm>
        </div>
        <div className="mb-4 relative">
          <span className="absolute right-3 top-8.5 text-gray-400 cursor-pointer"onClick={() => setShowPassword(!showPassword)}><img src={pass} alt="" className="mt-1" /></span>
          <InputForm 
            label="Konfirmasi Kata Sandi"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Masukkan kata sandi" >

          </InputForm>
        </div>


        <div className="flex justify-between text-sm mb-4">
          <span>
            Sudah punya akun?{" "}
            <Link to="/login" className="text-white-400 hover:underline">
              Masuk
            </Link>
          </span>
        </div>

        <Button type="submit">
          Daftar
        </Button>

        <div className="text-center text-sm text-gray-300 my-4">Atau</div>

        <Button className="w-full border border-gray-400 hover:bg-gray-700 py-2 rounded-full flex items-center justify-center gap-2 text-sm">
          <img src={icongoogle} alt="" className="mt-0.5" />
          Daftar dengan Google
        </Button>
        <ToastContainer />

      </form >
    </div>

  );
}
