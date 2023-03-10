import { RiContactsBookLine } from 'react-icons/ri';

import { iconSize } from 'services/utils/iconSize';

import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';

const HomePage = () => {
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
          <Button>Try it now</Button>
        </div>
      </Section>
    </main>
  );
};
export default HomePage;
