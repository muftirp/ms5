// redux/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import dataReducer from "./dataSlice";

// export const store = configureStore({
//   reducer: {
//     data: dataReducer, // <- daftarkan reducer
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import dataReducer from "./dataSlice"; // jika kamu punya data lain

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
  },
});
