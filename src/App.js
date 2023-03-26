import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
