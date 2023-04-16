// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import PublicRoute from './PublicRouts';
import PrivatRoute from './PrivatRouts';

import { Toaster } from 'react-hot-toast';
import { Container } from './Container.styled';
import NavbarMenu from 'components/Navigation/Navigation';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';
import { PhonebookPage } from 'pages/PhoneBookPage';
import Home from 'pages/Home';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivatRoute />}>
          <Route path="/contacts" element={<PhonebookPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: { background: '#F33A6A', color: '#000' },
        }}
      />
    </Container>
  );
};
