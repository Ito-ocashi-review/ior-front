import { axiosInstance } from '../axios';

type data = {
  sweet: string,
}

export const getSweet = ():void => {
  axiosInstance.get('/api/sweets');
};

export const createSweet = (data:data):void => {
  axiosInstance.post('/api/sweets/', {
    name: data.sweet,
  });
};
