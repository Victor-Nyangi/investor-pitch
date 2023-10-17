import axios from 'axios';

import { url } from '../api';
import { token } from '../utils/creds';

const getStatements = async () => {
  const response = await axios.get(url + '/statements',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  return response.data;
};

const createStatement = async (statement) => {
  const response = await axios.post(`${url}/statements`, statement);
  return response.data;
};

const getStatement = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/statements/${id}`);
  return response.data;
};

const deleteStatement = async (id) => {
  const { data } = await axios.delete(`${url}/statements/${id}`);
  return data;
};

const statementService = {
  createStatement,
  getStatements,
  getStatement,
  deleteStatement,
};

export default statementService;
