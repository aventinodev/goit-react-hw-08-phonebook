import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts-selectors';
import { Loader } from 'components/Loader/Loader';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {error && <p className={css.notes}>Something wrong!</p>}

      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};
export default ContactsList;
