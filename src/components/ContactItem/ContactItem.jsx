import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li className={css.item}>
      <p className={css.notes}>
        {name}: {number}
      </p>

      <button className={css.btn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
