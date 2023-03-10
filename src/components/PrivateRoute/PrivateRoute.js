import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import { selectGetAuth } from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const { isLogged, token } = useSelector(selectGetAuth);

  if (!isLogged && token) {
    return <p>...loading</p>;
  }
  if (!isLogged && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
