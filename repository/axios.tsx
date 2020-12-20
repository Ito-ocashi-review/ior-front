import Axios from 'axios';

export const iorAxiosInstance = Axios.create({
  baseURL: process.env.API_SERVER_URL,
});
