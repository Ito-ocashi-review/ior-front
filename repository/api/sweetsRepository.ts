import { iorAxiosInstance } from '../axios';

export const getSweet = ():Promise<typeof iorAxiosInstance> => {
  return iorAxiosInstance.get('/api/sweets');
};
