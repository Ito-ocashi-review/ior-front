import Axios from 'axios';

export const getAxios = Axios.create({
  baseURL: process.env.API_SERVER_URL,
  // headers: { Authorization: `Bearer ${session}` },
});
