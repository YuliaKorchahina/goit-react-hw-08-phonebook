import NavbarAuth from 'components/NavBarAuth';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const NavbarMenu = () => {
  const isLogin = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/">
          <Link component="button" variant="body2">
            Home
          </Link>
        </NavLink>
        {isLogin ? <UserMenu /> : <NavbarAuth />}
      </div>
    </nav>
  );
};

export default NavbarMenu;
