import { getAxios } from '../axios';

export const getSweet = ():Promise<any> => {
  return getAxios.get('/api/sweets');
};
