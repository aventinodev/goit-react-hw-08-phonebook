import Section from 'components/Section/Section';
import ContactsList from 'components/ContactsList/ContactsList';
import FormContact from 'components/FormContact/FormContact';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';
const ContactsPage = () => {
  return (
    <>
      <main>
        <Section>
          <div className="container">
            <Title>Phonebook</Title>
            <FormContact />
            <Title>Contacts</Title>
            <div className="wrapper">
              <Filter />
              <ContactsList />
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default ContactsPage;
