import React from 'react';
import { useState } from 'react';
import { fetchAddContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';

import ClipLoader from 'react-spinners/ClipLoader';
import css from './FormContact.module.css';

const FormContact = () => {
  const initialState = {
    name: '',
    number: '',
  };
  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName ||
        contact.number === number
      );
    });
    return Boolean(result);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (isDublicate(name, number)) {
      alert('Contact with such name or number is already  exist');
      return false;
    }
    dispatch(fetchAddContact({ name, number }));
    setState({ ...initialState });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.field}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.field}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.btn} type="submit">
        {isLoading ? (
          <ClipLoader
            display="block"
            margin="0 auto"
            color="#ffffff"
            size={16}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          'Add contact'
        )}
      </button>
    </form>
  );
};

export default FormContact;
