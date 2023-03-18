import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectOperation } from 'redux/contacts/contacts-selectors';
import { Loader } from 'components/Loader/Loader';
// import { ClipLoader } from 'react-spinners';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const operation = useSelector(selectOperation);

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <p className={css.notes}>
        {name}: {number}
      </p>

      <button className={css.btn} type="button" onClick={onDeleteContact}>
        {operation === id ? <Loader size={16} color={'#ffffff'} /> : 'Delete'}
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
