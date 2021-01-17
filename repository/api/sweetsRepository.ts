import { axiosInstance } from '../axios';

export const getSweet = ():Promise<any> => {
  return axiosInstance.get('/api/sweets');
};

type data = {
  sweet: string,
}

export const createSweet = (data:data):Promise<any> => {
  return axiosInstance.post('/api/sweets/', {
    name: data.sweet,
  });
};
