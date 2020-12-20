import { axiosInstance } from '../axios';

type data = {
  sweet: string,
}

export const postSweet = (data:data):Promise<typeof axiosInstance> => {
  return axiosInstance.post('/api/sweets', {
    name: data.sweet,
  });
};
