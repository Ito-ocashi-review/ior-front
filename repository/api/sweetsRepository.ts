import Axios from 'axios';

export const getSweet = ():Promise<any> => {
  return Axios.get(`${process.env.API_SERVER_URL}/api/sweets`);
};
