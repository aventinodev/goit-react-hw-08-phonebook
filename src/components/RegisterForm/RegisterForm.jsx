import { useState } from 'react';
import initialState from './initialState';
import TextField from 'components/TextField/TextField';
import fields from './fields';
import Button from 'components/Button/Button';
import css from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const { name, email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({ ...initialState });
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};
export default RegisterForm;
