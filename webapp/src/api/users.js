import axios from 'axios';

const userAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/users`
});

export const signIn = user => {
  return userAPI.request({ method: 'post', url: '/signin', data: user });
};

export const signUp = user => {
  return userAPI.request({ method: 'post', url: '/signup', data: user });
};

export const createWorkspace = workspace => {
  return userAPI.request({
    method: 'put',
    url: '/createWorkspace',
    data: { name: workspace.name },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};

export const getUserInfo = () => {
  return userAPI.request({
    method: 'get',
    url: '/userInfo',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};
