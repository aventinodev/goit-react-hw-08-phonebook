import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';

import NavBar from './NavBar/NavBar';
import AuthBar from './AuthBar/AuthBar';
import UserMenu from './UserMenu/UserMenu';

import css from './AppBar.module.css';

const AppBar = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className="container">
        {isLogIn ? (
          <div className={css.wrapperLogin}>
            <NavBar />
            <UserMenu />
          </div>
        ) : (
          <div className={css.wrapper}>
            <NavBar />
            <AuthBar />
          </div>
        )}
      </div>
    </header>
  );
};

export default AppBar;
