import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsUserLogged } from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsUserLogged);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
