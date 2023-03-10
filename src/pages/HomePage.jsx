import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RiContactsBookLine } from 'react-icons/ri';

import { iconSize } from 'services/utils/iconSize';

import { logIn } from 'redux/auth/auth-operations';

import Section from 'components/Section/Section';
import Title from 'components/Title/Title';

const HomePage = () => {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(logIn());
  };

  return (
    <main>
      <Section>
        <div className="container">
          <p className="text"> The storage of your contacts you can trust</p>

          <RiContactsBookLine
            size={iconSize.xxl}
            style={{
              display: 'block',
              fill: '#0984b9',
              margin: '0 auto 32px',
            }}
          />
          <Title>Phonebook</Title>
          <NavLink to="/login" className="btn">
            Try it now
          </NavLink>
        </div>
      </Section>
    </main>
  );
};
export default HomePage;
