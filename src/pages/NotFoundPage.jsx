import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { iconSize } from 'services/utils/iconSize';
import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
const NotFoundPage = () => {
  return (
    <main>
      <Section>
        <div className="container">
          <Title>Page not found</Title>
          <Link className="link" to="/">
            <span>
              <BsArrowLeftShort
                size={iconSize.sm}
                style={{
                  fill: 'inherit',
                }}
              />
            </span>
            To Main page
          </Link>
        </div>
      </Section>
    </main>
  );
};
export default NotFoundPage;
