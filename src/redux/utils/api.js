import axios from "axios";
import { useEffect } from "react";

import { url } from '../api';

const useApi = () => {
   const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.access_token;
  const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
    },
  });

  useEffect(() => {
    const requestIntercept = instance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.data?.error === "Unauthenticated.") {
          localStorage.removeItem("permissions");
        } else {
          console.log(`error`, error);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestIntercept);
      instance.interceptors.response.eject(responseIntercept);
    };
    // eslint-disable-next-line
  }, []);

  return instance;
};

export default useApi;
