import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

const PrivatRoute = () => {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />
};

export default PrivatRoute;
