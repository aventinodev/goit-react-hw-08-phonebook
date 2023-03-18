import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/auth-selector';
import { selectError } from 'redux/contacts/contacts-selectors';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const errorAuth = useSelector(selectAuthError);

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    resetForm();
  };

  const resetForm = () => {
    if (!errorAuth) {
      setState({ ...initialState });
    }
  };
  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
