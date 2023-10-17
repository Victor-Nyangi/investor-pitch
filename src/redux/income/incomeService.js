import axios from 'axios';

import { url } from '../api';
import { token } from '../utils/creds';

const getIncomes = async () => {
  const response = await axios.get(url + '/incomes',
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const createIncome = async (income) => {
  const response = await axios.post(`${url}/incomes`, income);
  return response.data;
};

const editIncome = async (id, income) => {
  const response = await axios.patch(`${url}/incomes/${id}`, income);
  return response.data;
};

const getFewIncomes = async () => {
  const response = await axios.get(`${url}/incomes/fetch/count`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const getIncome = async (id) => {
  const response = await axios.get(`${url}/incomes/${id}`);
  return response.data;
};

const deleteIncome = async (id) => {
  const { data } = await axios.delete(`${url}/incomes/${id}`);
  return data;
};

const incomeService = {
  createIncome,
  getIncomes,
  getFewIncomes,
  getIncome,
  editIncome,
  deleteIncome,
};

export default incomeService;
