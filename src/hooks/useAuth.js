import { useSelector } from 'react-redux';
import {
  selectGetUser,
  selectIsUserLogged,
  selectIsCurrent,
} from '../redux/auth/auth-selector';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsUserLogged);
  const isCurrent = useSelector(selectIsCurrent);
  const user = useSelector(selectGetUser);

  return {
    isLoggedIn,
    isCurrent,
    user,
  };
};
export default useAuth;
