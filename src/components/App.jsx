import React from 'react';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
  return (
    <div>
      <AppBar />
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
          <Route path="*" element={<NotFoundPage />} />{' '}
        </Routes>
      </Suspense>
      <AppFooter />
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
