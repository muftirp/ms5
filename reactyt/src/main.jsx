import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/redux/store'; // <- tambahkan

import RegisterPage from './Pages/register.jsx';
import HomePage from './Pages/beranda.jsx';
import TESTING1 from './Pages/beranda1.jsx';
import TESTING2 from './Pages/beranda2.jsx';
import LoginPage from './Pages/login.jsx';
import DAFTARSAYA from './Pages/DaftarSaya.jsx';
import ProfileSaya from './Pages/profileSaya.jsx';
import Series from './Pages/series.jsx';
// import CorselPage from './components/Layouts/beranda/corsel.jsx'


// index.js (atau main.jsx di Vite)

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import { store } from "./redux/store"; // <- impor store


const router = createBrowserRouter([
  { path: '/', element: <LoginPage />},
  { path: '/login', element: <LoginPage />},
  { path: '/daftar', element: <RegisterPage /> },
  { path: '/beranda', element: <HomePage /> },
  { path: '/beranda1', element: <TESTING1 /> },
  { path: '/beranda2', element: <TESTING2 /> },
  { path: '/daftarsaya', element: <DAFTARSAYA /> },
  { path: '/profilesaya',element: <ProfileSaya />},
  { path: '/series',element: <Series />},
  // { path: '/corsel', element: <CorselPage /> },
]);




// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App /> {/* Semua komponen anak punya akses ke state Redux */}
//     </Provider>
//   </React.StrictMode>
// );