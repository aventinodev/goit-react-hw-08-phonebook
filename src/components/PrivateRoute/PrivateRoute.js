import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectIsUserLogged,
  selectIsUserToken,
} from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsUserLogged);
  const isToken = useSelector(selectIsUserToken);

  if (!isLogin && isToken) {
    return <p>...loading</p>;
  }
  if (!isLogin && !isToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
