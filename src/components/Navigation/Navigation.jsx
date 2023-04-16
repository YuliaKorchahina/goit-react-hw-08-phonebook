import NavbarAuth from 'components/NavBarAuth';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
// import Home from 'pages/Home';
// import { PhonebookPage } from 'pages/PhoneBookPage';
import { NavLink } from 'react-router-dom';

// import styles from './navigation.module.scss'

const NavbarMenu = () => {
  const isLogin = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/contacts">Phonebook</NavLink> */}
        {/* <NavLink to="/register">Register</NavLink> */}
        {/* <NavLink to="/login">Login</NavLink> */}
        {/* {isLogin && <PhonebookPage/>} */}
        {isLogin ? <UserMenu /> : <NavbarAuth />}
      </div>
    </nav>
  );
};

export default NavbarMenu;
