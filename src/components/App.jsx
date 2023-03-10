import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { currentUser } from 'redux/auth/auth-operations';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PublicRoute/PublicRoute';
import { Loader } from 'components/Loader/Loader';
import '../index.css';

import AppBar from './AppBar/AppBar';
import AppFooter from './AppFooter/AppFooter';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

// import { Wrapper, Title } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {/* <AuthLayout> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* </AuthLayout> */}
      <AppFooter />
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default App;
