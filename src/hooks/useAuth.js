import { useSelector } from 'react-redux';
import {
  selectGetUser,
  selectIsUserLogged,
  selectIsRefreshing,
} from '../redux/auth/auth-selector';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsUserLogged);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectGetUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
export default useAuth;
