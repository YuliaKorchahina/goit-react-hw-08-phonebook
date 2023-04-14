// import UserMenu from 'components/UserMenu';
// import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

// import styles from './navigation.module.scss'

const NavbarMenu = () => {
  // const isLogin = useAuth();

  return (
    <nav>
      <div >
      <NavLink to="/">Phonebook</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* {isLogin && <UserMenu />} */}
      </div>
    </nav>
  );
};

export default NavbarMenu;
