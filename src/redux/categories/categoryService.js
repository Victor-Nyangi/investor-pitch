import axios from 'axios';

import { url } from '../api';

const getCategories = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + '/categories');
  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(`${url}/categories`, category);
  return response.data;
};

const editCategory = async (id, category) => {
  const response = await axios.patch(`${url}/categories/${id}`, category);
  return response.data;
};

const getCategory = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/categories/${id}`);
  return response.data;
};

const deleteCategory = async (id) => {
  const { data } = await axios.delete(`${url}/categories/${id}`);
  return data;
};

const categoryService = {
  createCategory,
  getCategories,
  getCategory,
  editCategory,
  deleteCategory,
};

export default categoryService;
