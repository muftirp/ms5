import { Link, useNavigate } from "react-router-dom";
import pass from "../assets/images/icon/eye.png";
import icongoogle from "../assets/images/icon/google.png";
import Label from "../components/Elements/Input/Label";
import Input from "../components/Elements/Input/Input";
import Button from "../components/Elements/Button";
import Logo from "../components/Elements/Logo/Logo";
import Description from "../components/Elements/Logo/Description";
import InputForm from "../components/Elements/Input";
import { z } from "zod";
import { useEffect, useState } from "react";
import { toast, ToastContainer, } from "react-toastify";

  const loginSchema = z.object({
  username: z.string().min(1,{message:"username wajib diisi"}),
  password: z.string().min(6,{message:"password minimal 6 karakter"})
 });
export default function LoginPage() {
  const [errors, setErrors] = useState({});
 const navigate = useNavigate();
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const userData = localStorage.getItem("user");
    if(userData){
      navigate("/");
    }
  },[navigate]);

  // const handleLogin = async(e)=> {
  //   e.preventDefault();
  //   setErrors({});
  //   const validationResult = loginSchema.safeParse({username, password});
  //   if(!validationResult.success) {
  //     const fieldErrors = validationResult.error.format();
  //     setErrors(fieldErrors);
  //     return;
  //   }
  //   try{
  //     const response = await fetch(`${import.meta.env.VITE_API_URL}/users`,{
  //       method:"GET",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     }
  //   );
  //   if(response.ok) {
  //     const data = await response.json();
  //     if(Array.isArray(data)) {
  //       const user = data.find(
  //         (user) => user.username === username && user.password === password
  //       );
  //       if(user){
  //         localStorage.setItem("user",JSON.stringify({
  //           name: user.name,
  //           username: user.username,
  //           // password: user.password,
  //           // avatar:`https://robohash.org/${user.name}.png?set=set2` ,
  //         }));
  //         toast.success("login berhasil",{position:"top-right"});
  //         // return navigate("/beranda2");

          
  //       }else {
  //         setErrors({general:"akun anda tidak ditemukan"});
  //       }
  //       } else {
  //         setErrors({general:"format respons tidak valid"});
  //       }
  //     } else {
  //       setErrors({general:"login gagal coba lagi"});
  //     }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       setErrors({general:"Terjadi kesalahan saat login"});
  //     }
  //   };
    const handleLogin = async (e) => {
  e.preventDefault();
  setErrors({});
  setLoading(true); // ⬅️ Mulai loader

  const validationResult = loginSchema.safeParse({ username, password });
  if (!validationResult.success) {
    const fieldErrors = validationResult.error.format();
    setErrors(fieldErrors);
    setLoading(false); // ⬅️ Stop loader saat validasi gagal
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data)) {
        const user = data.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: user.name,
              username: user.username,
            })
          );
          toast.success("Login berhasil", { position: "top-right" });
          setTimeout(() => {
  navigate("/beranda2");
}, 1000); // 1 detik

        } else {
          setErrors({ general: "Akun Anda tidak ditemukan" });
        }
      } else {
        setErrors({ general: "Format respons tidak valid" });
      }
    } else {
      setErrors({ general: "Login gagal, coba lagi" });
    }
  } catch (error) {
    console.error("Error:", error);
    setErrors({ general: "Terjadi kesalahan saat login" });
  } finally {
    setLoading(false); // ⬅️ Selalu matikan loader di akhir
  }
};
  




    // const handleLogin =(event) => {
    // event.preventDefault();
    // localStorage.setItem('username', event.target.username.value);
    // localStorage.setItem('password', event.target.password.value);
     
    // console.log("Username:", event.target.username.value);
    // console.log("Password:", event.target.password.value);
    //   console.log("Login button clicked");
    //   window.location.href = '/beranda1';
    // }
  
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: "url('/masuk.png')" }}>
      {/* <form onSubmit={handleLogin} 
      className="bg-black/74 p-8 rounded-2xl shadow-lg w-full max-w-md text-white"> */}
      <form 
  onSubmit={handleLogin} 
  className={`bg-black/74 p-8 rounded-2xl shadow-lg w-full max-w-md text-white ${loading ? "opacity-50 pointer-events-none" : ""}`}>

        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2 flex justify-center items-center">
            <Logo />
          </div>

          <Description ket="Masuk" desc="Selamat datang kembali" >
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
            {errors?.username && (
  <p className="text-red-400 text-sm mt-1">{errors.username._errors?.[0]}</p>
)}
        </div>

        <div className="mb-4 relative">
          <span className="absolute right-3 top-8.5 text-gray-400 cursor-pointer " onClick={() => setShowPassword(!showPassword)}><img src={pass} alt="" className="mt-1" /></span>
        
          <InputForm
            label="Kata Sandi"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi" />
            {/* Tambahkan ini untuk error password */}
  {errors?.password && (
    <p className="text-red-400 text-sm mt-1">
      {errors.password._errors?.[0]}
    </p>
  )}

  {/* General error tetap di bawah */}
  {errors?.general && (
    <p className="text-red-400 text-sm mt-2 text-center">{errors.general}</p>
  )}
          </div>

        <div className="flex justify-between text-sm mb-4">
          <span>
            Belum punya akun?{" "}
            <Link to="/daftar" className="text-white-400 hover:underline ">
              Daftar
            </Link>
          </span>
          <Link to="#" className="text-white-400 hover:text-red-400 underline">
            Lupa kata sandi?
          </Link>
        </div>
        {/* <Button type="submit">
          Masuk
        </Button> */}
        <Button type="submit" disabled={loading}>
  {loading ? (
    <div className="flex items-center gap-2 justify-center">
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      Memuat...
    </div>
  ) : (
    "Masuk"
  )}
</Button>
        <div className="text-center text-sm text-gray-300 my-4">Atau</div>
        <Button>
          <img src={icongoogle} alt="" className="mt-0.5" />
          Masuk dengan Google
        </Button>
        <ToastContainer/>
      </form>

    </div>
  );
}
