import axios from 'axios';

const taskAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/tasks`
});

export const create = task => {
  return taskAPI.request({
    method: 'post',
    data: task,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};

export const deleteTask = task => {
  return taskAPI.request({
    method: 'delete',
    data: task,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};
