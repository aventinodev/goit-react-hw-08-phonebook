import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLogged } from 'redux/auth/auth-selector';
import css from './NavBar.module.css';

const NavBar = () => {
  const isLogin = useSelector(selectIsUserLogged);
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLogin && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default NavBar;
