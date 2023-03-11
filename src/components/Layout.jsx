import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './AppBar/AppBar';
import AppFooter from './AppFooter/AppFooter';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <AppFooter />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <ToastContainer autoClose={1000} rtl />
    </div>
  );
};
