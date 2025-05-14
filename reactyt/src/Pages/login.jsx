import { Link } from "react-router-dom";
import pass from "../assets/images/icon/eye.png";
import icongoogle from "../assets/images/icon/google.png";
import Label from "../components/Elements/Input/Label";
import Input from "../components/Elements/Input/Input";
import Button from "../components/Elements/Button";
import Logo from "../components/Elements/Logo/Logo";
import Description from "../components/Elements/Logo/Description";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/masuk.png')" }}>
      <form action=""
        className="bg-black/74 p-8 rounded-2xl shadow-lg w-full max-w-md text-white"
      >
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2 flex justify-center items-center">
            <Logo />
          </div>

          <Description ket="Masuk" desc="Selamat datang kembali" >
          </Description>
        </div>
        <div className="mb-4">
          <Label text="Username" />
          <Input type="text"
            placeholder="Masukkan username" />
        </div>

        <div className="mb-4">
          <Label text="Kata Sandi" />
          <div className="relative">
            <Input type="password"
              placeholder="Masukkan kata sandi" />
            <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"><img src={pass} alt="" className="mt-1" /></span>
          </div>
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
        <Button>
          Masuk
        </Button>
        <div className="text-center text-sm text-gray-300 my-4">Atau</div>
        <Button>
          <img src={icongoogle} alt="" className="mt-0.5" />
          Masuk dengan Google
        </Button>
      </form>

    </div>
  );
}
