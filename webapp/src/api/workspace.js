import axios from 'axios';

const workspaceAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/workspace`
});

export const getInfo = _id => {
  return workspaceAPI.request({
    method: 'get',
    url: `/?_id=${_id}`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  });
};
