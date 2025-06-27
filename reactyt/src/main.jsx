import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './Pages/register.jsx'
import HomePage from './Pages/beranda.jsx'
import TESTING1 from './Pages/beranda1.jsx'
import TESTING2 from './Pages/beranda2.jsx'
import LoginPage from './Pages/login.jsx'
import DAFTARSAYA from './Pages/DaftarSaya.jsx'
import ProfileSaya from './Pages/profileSaya.jsx'
import Series from './Pages/series.jsx'
// import CorselPage from './components/Layouts/beranda/corsel.jsx'



const router = createBrowserRouter([
  { 
    path: '/', 
    element: <LoginPage />
  },
  {
    path: '/login', 
    element: <LoginPage />
  },
  {
    path: '/daftar', 
    element: <RegisterPage /> 
  },
  {
    path: '/beranda', 
    element: <HomePage /> 
    
  },
  {
    path: '/beranda1', 
    element: <TESTING1 /> 
  },
   {
    path: '/beranda2', 
    element: <TESTING2 /> 
  },
  { 
    path: '/daftarsaya', 
    element: <DAFTARSAYA /> 

  },
  {
    path: '/profilesaya',
    element: <ProfileSaya />
  },
    {
    path: '/series',
    element: <Series />
  },
  // {
  //   path: '/corsel', 
  //   element: <CorselPage /> 
    
  // },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
