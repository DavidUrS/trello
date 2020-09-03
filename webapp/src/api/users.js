import axios from 'axios';

const productAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/users`
});

export const signIn = user => {
  return productAPI.request({ method: 'post', url: '/signin', data: user });
};

export const signUp = user => {
  return productAPI.request({ method: 'post', url: '/signup', data: user });
};
