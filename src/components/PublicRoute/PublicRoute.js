import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectIsUserLogged,
  selectIsUserToken,
} from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsUserLogged);
  const isToken = useSelector(selectIsUserToken);

  if (!isLogin && isToken) {
    return <p>...loading</p>;
  }
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
