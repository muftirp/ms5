import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../redux/dataSlice";
import { addData, editData, deleteData } from "../services/api";

export default function ListView() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.data);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAdd = async () => {
    await addData(form);
    dispatch(fetchUsers());
    setForm({ name: "", email: "" });
  };

  const handleEdit = async (id) => {
    const name = prompt("Nama baru:");
    const email = prompt("Email baru:");
    if (name && email) {
      await editData(id, { name, email });
      dispatch(fetchUsers());
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Hapus data ini?")) {
      await deleteData(id);
      dispatch(fetchUsers());
    }
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-4">Daftar Pengguna</h1>

      <input
        type="text"
        placeholder="Nama"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="p-1 mr-2 bg-gray-700 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="p-1 mr-2 bg-gray-700 rounded"
      />
      <button onClick={handleAdd} className="bg-blue-700 px-3 py-1 rounded">
        Tambah
      </button>

      {loading && <p className="mt-4">Memuat data...</p>}

      <ul className="mt-6 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="bg-gray-800 p-2 rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-sm">{user.email}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(user.id)} className="text-yellow-300">Edit</button>
              <button onClick={() => handleDelete(user.id)} className="text-red-400">Hapus</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}