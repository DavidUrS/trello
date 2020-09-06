import axios from 'axios';

const taskAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/tasks`
});

export const create = task => {
  return taskAPI.request({
    method: 'put',
    data: task,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};
