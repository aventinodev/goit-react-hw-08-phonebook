import useForm from 'hooks/useForm';
import initialState from './initialState';
import TextField from 'components/TextField/TextField';
import fields from './fields';
import Button from 'components/Button/Button';
import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;
