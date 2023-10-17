import axios from 'axios'

import { url } from '../api';
import { token } from '../utils/creds';
// Register user
const register = async (userData) => {
  const response = await axios.post(url + '/users', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(`${url}/users/login`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Fetch user
const getProfile = async () => {
//  const user = JSON.parse(localStorage.getItem("user"));
//  const config = {
//     headers: { Authorization: `Bearer ${user.token}` }
// };

  const email = 'vktargnyangi@gmail.com';
  // const response = await axios.get(`${url}/users/profile/${email}`, config)
  const response = await axios.get(`${url}/users/profile/${email}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  return response.data
}

// Fetch user
// const getProfile = async (email) => {
//   const response = await axios.get(`${url}/profile/${email}`)
//   return response.data
// }

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const updateProfile = async (user) => {
  const response = await axios.patch(`${url}/users/update/profile/${user.email}`, user);
  return response.data;
};

const authService = {
  register,
  logout,
  login,
  getProfile,
  updateProfile
}

export default authService
