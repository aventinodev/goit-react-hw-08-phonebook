import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/auth-operations';

import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignUp = data => {
    dispatch(register(data));
  };

  return (
    <main>
      <Section>
        <div className="container">
          <Title>Register</Title>
          <RegisterForm onSubmit={handleSignUp} />
        </div>
      </Section>
    </main>
  );
};

export default RegisterPage;
