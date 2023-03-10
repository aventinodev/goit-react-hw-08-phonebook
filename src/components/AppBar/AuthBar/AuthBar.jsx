import { NavLink } from 'react-router-dom';
import css from './AuthBar.module.css';

const AuthBar = () => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="/register">
            Sign Up
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default AuthBar;
