import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_API_URL;

// Ambil user berdasarkan username (dari localStorage)
export const fetchUserByUsername = createAsyncThunk(
  "user/fetchUserByUsername",
  async (username) => {
    const res = await fetch(`${BASE_URL}/users?username=${username}`);
    const data = await res.json();
    return data[0]; // ambil 1 user
  }
);

// Update user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (updatedUser) => {
    const res = await fetch(`${BASE_URL}/users/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    if (!res.ok) throw new Error("Gagal update profil");
    return await res.json();
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    await fetch(`${BASE_URL}/users/${userId}`, { method: "DELETE" });
    return userId;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUsername.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserByUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserByUsername.rejected, (state) => {
        state.loading = false;
        state.error = "Gagal memuat user";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.data = null;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
