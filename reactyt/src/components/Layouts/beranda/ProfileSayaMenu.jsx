import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserByUsername, updateUser,deleteUser,clearUser,} from "../../../store/redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TandaSeru from "../../../assets/images/icon/tandaseru.png"; // opsional

export default function ProfileSayaMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: user, loading } = useSelector((state) => state.user);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "********",
    avatar: "",
    newAvatar: "",
  });
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  // Ambil data user dari localStorage dan dispatch ke Redux
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.username) {
      dispatch(fetchUserByUsername(storedUser.username));
    }
  }, [dispatch]);

  // Set nilai form setelah data user berhasil di-fetch
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        password: user.password || "********",
        avatar: user.avatar || "",
        newAvatar: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedUser = {
      ...user,
      name: form.name,
      email: form.email,
      password: form.password,
      avatar: form.newAvatar || form.avatar,
    };

    dispatch(updateUser(updatedUser))
      .unwrap()
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
        toast.success("Profil berhasil diperbarui");
      })
      .catch(() => toast.error("Gagal memperbarui profil"));
  };

  const handleDelete = () => {
    if (confirm("Yakin ingin menghapus akun?")) {
      dispatch(deleteUser(user.id))
        .unwrap()
        .then(() => {
          localStorage.removeItem("user");
          dispatch(clearUser());
          toast.success("Akun berhasil dihapus");
          setTimeout(() => navigate("/"), 1000);
        })
        .catch(() => toast.error("Gagal menghapus akun"));
    }
  };

  if (loading || !user)
    return <div className="p-10 text-white">Memuat profil...</div>;

  return (
    <div className="px-6 py-6 text-white max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Profil Saya</h1>

      <div className="text-center mb-6">
        <img
          src={form.newAvatar || form.avatar || "https://via.placeholder.com/100"}
          alt="avatar"
          className="w-32 h-32 rounded-full mx-auto mb-2"
        />
        <input
          type="text"
          name="newAvatar"
          placeholder="URL foto baru"
          value={form.newAvatar}
          onChange={handleChange}
          className="bg-gray-800 p-2 rounded text-sm w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Nama</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="bg-gray-700 p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="bg-gray-700 p-2 rounded w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1">Kata Sandi</label>
        {isEditingPassword ? (
          <input
            type="text"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="bg-gray-700 p-2 rounded w-full"
          />
        ) : (
          <div className="flex justify-between items-center bg-gray-700 p-2 rounded">
            <span>**************</span>
            <button
              className="text-sm text-blue-400"
              onClick={() => setIsEditingPassword(true)}
            >
              Ubah Sandi
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={handleUpdate}
          className="bg-blue-800 px-6 py-2 rounded-full"
        >
          Simpan
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-700 px-6 py-2 rounded-full"
        >
          Hapus Akun
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
