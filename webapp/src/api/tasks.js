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

export const changeStatusTask = task => {
  return taskAPI.request({
    method: 'put',
    url: `/changeStatus/${task._id}`,
    data: { status: task.status },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};

export const searchTask = task => {
  return taskAPI.request({
    method: 'get',
    url: `/search?workspace=${task.workspace}&textToSearch=${task.textToSearch}`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};
