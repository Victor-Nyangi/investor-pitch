import axios from 'axios';

import { url } from '../api';
import { token } from '../utils/creds';


const getReport = async () => {
  const response = await axios.get(url + '/reports',
    {headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
});
  return response.data;
};


const getCustomReport = async (filter) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/reports/${filter}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};


const reportService = {
  getReport,
  getCustomReport,
};

export default reportService;
