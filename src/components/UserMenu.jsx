import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };
  const { name } = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {name} 🍕! </p>
      <button onClick={onLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
