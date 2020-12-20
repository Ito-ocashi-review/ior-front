import { axiosInstance } from '../axios';

export const getSweet = ():Promise<any> => {
  return axiosInstance.get('/api/sweets');
};
