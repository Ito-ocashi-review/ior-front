import { axiosInstance } from '../axios';

type data = {
  sweetId: string,
  sweet: string,
}

export const postSweet = (data:data):Promise<any> => {
  return axiosInstance.post('/api/sweets', {
    name: data.sweet,
  });
};
