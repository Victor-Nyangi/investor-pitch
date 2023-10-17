import axios from 'axios';

import { url } from '../api';
import { token } from '../utils/creds';

const getTransactions = async () => {
  const response = await axios.get(url + '/transactions',
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const getTransaction = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/transactions/${id}`);
  return response.data;
};

const getFewTransactions = async (count) => {
  const response = await axios.get(`${url}/transactions/fetch/${count}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const transactionService = {
  getTransactions,
  getFewTransactions,
  getTransaction
};

export default transactionService;
