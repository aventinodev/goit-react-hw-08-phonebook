import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import ClipLoader from 'react-spinners/ClipLoader';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const isLoading = useSelector(selectIsLoading);
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
          'Delete'
        )}
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
