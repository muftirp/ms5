import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api.js"; // fungsi GET dari API

// asyncThunk untuk ambil data dari API
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await getData();
  return response;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    users: [],     // <- state awal berupa array kosong
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = "Gagal memuat data pengguna";
      });
  },
});

export default dataSlice.reducer;