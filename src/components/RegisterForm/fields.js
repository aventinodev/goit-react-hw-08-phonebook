const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    placeholder: 'Your name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'Your email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'Password',
  },
};

export default fields;
