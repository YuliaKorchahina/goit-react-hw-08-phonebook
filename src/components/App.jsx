// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

import PublicRoute from './PublicRouts';
import PrivatRoute from './PrivatRouts';

import { Toaster } from 'react-hot-toast';
// import { Phonebook } from './Phonebook';
// import { ContactsList } from '../pages/Contacts';
import { Container } from './Container.styled';
// import { Filter } from './Filter';
import NavbarMenu from 'components/Navigation/Navigation';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';
import { PhonebookPage } from 'pages/PhoneBookPage';

export const App = () => {
  return (
    <Container>
      <NavbarMenu />
      <Routes>
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
