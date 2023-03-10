import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/auth-operations';
import { selectGetUser } from 'redux/auth/auth-selector';
// import Button from 'components/Button/Button';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(selectGetUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    console.log('222');
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Wellcome, {name}</p>
      <button className={css.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
