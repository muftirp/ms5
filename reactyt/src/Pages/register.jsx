import { Link } from "react-router-dom";
import pass from "../assets/images/icon/eye.png";
import icongoogle from "../assets/images/icon/google.png";
import Logo from "../components/Elements/Logo/Logo";
import Description from "../components/Elements/Logo/Description";
import Label from "../components/Elements/Input/Label";
import Input from "../components/Elements/Input/Input";
import Button from "../components/Elements/Button";
import InputForm from "../components/Elements/Input";

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/masuk.png')" }}
    >
      <div className="bg-black/74 bg-opacity-60 p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
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
            placeholder="Masukkan username" />
        </div>
        {/* <div className="mb-4">
          <Label text="Username" />
          <Input type="password"
            placeholder="Masukkan username" />
        </div> */}
<div className="mb-4 relative">
          <span className="absolute right-3 top-8.5 text-gray-400 cursor-pointer"><img src={pass} alt="" className="mt-1" /></span>
          <InputForm
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukkan kata sandi" >
              
            </InputForm>
          </div>
<div className="mb-4 relative">
          <span className="absolute right-3 top-8.5 text-gray-400 cursor-pointer"><img src={pass} alt="" className="mt-1" /></span>
          <InputForm
            label="Konfirmasi Kata Sandi"
            type="password"
            name="password"
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

        <Button>
          Masuk
        </Button>

        <div className="text-center text-sm text-gray-300 my-4">Atau</div>

        <Button className="w-full border border-gray-400 hover:bg-gray-700 py-2 rounded-full flex items-center justify-center gap-2 text-sm">
          <img src={icongoogle} alt="" className="mt-0.5" />
          Daftar dengan Google
        </Button>
      </div>
    </div>
  );
}
