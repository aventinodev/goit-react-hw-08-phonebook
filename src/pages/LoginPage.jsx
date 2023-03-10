import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';

import Section from 'components/Section/Section';
import LoginForm from 'components/LoginForm/LoginForm';
import Title from 'components/Title/Title';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogIn = data => {
    dispatch(logIn(data));
  };

  return (
    <main>
      <Section>
        <div className="container">
          <Title>Log in</Title>
          <LoginForm onSubmit={handleLogIn} />
        </div>
      </Section>
    </main>
  );
};

export default LoginPage;
