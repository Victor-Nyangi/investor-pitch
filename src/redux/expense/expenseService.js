import axios from 'axios';

import { url } from '../api';
import { token } from '../utils/creds';

const getExpenses = async () => {
  const response = await axios.get(url + '/expenses',
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
  );
  return response.data;
};

const createExpense = async (expense) => {
  const response = await axios.post(`${url}/expenses`, expense);
  return response.data;
};

const editExpense = async (expense) => {
  const response = await axios.patch(`${url}/expenses/${expense.id}`, expense);
  return response.data;
};

const getExpense = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/expenses/${id}`);
  return response.data;
};

const deleteExpense = async (id) => {
  const { data } = await axios.delete(`${url}/expenses/${id}`);
  return data;
};

const expenseService = {
  createExpense,
  getExpenses,
  getExpense,
  editExpense,
  deleteExpense,
};

export default expenseService;
