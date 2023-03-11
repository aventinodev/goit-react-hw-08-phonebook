import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Utility to add or remove JWT
const setToken = token => {
  if (token) {
    return (instance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common['Authorization'] = '';
};

/* POST @ /users/signup */
export const signUpUser = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

/* POST @ /users/login */
export const logInUser = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

// * GET @ /users/current
export const refreshUser = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    // setToken();
    throw error;
  }
};

export const logOut = async () => {
  const { data } = instance.post('/users/logout');
  setToken();
  console.log(data);
  return data;
};

export default instance;
