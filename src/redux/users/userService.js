import axios from 'axios';

import { url } from '../api';

const getUsers = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + '/admin/users');
  return response.data;
};

const getUser = async (id) => {
  const response = await axios.get(`${url}/admin/users/${id}`);
  return response.data;
};

const userService = {
  getUser,
  getUsers,
};

export default userService;
