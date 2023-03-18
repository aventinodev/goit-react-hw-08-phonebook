import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectFilteredContacts,
  selectError,
  selectOperation,
} from 'redux/contacts/contacts-selectors';

import { Loader } from 'components/Loader/Loader';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const operation = useSelector(selectOperation);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {operation === 'fetch' && !error && <Loader />}

      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};
export default ContactsList;
