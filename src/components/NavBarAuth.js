import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register">
        <Link component="button" variant="body2">
          Register
        </Link>
      </NavLink>
      |
      <NavLink to="/login">
        <Link component="button" variant="body2">
          Login
        </Link>
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
