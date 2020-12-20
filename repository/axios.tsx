import Axios from 'axios';

export const axiosInstance = Axios.create({
  baseURL: process.env.API_SERVER_URL,
});
