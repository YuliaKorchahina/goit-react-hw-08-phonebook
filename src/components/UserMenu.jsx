import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };
  const { name } = useSelector(selectUser);
  return (
    <div>
      <NavLink to="/contacts">
        <Link component="button" variant="body2">
          Contacts
        </Link>
      </NavLink>
      <Stack direction="row" spacing={2}>
        <Button onClick={onLogOut} variant="contained" endIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Stack>
      <p>Welcome, {name}! </p>
    </div>
  );
};

export default UserMenu;
