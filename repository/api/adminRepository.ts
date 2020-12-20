import { iorAxiosInstance } from '../axios';

type data = {
  sweet: string,
}

export const postSweet = (data:data):Promise<typeof iorAxiosInstance> => {
  return iorAxiosInstance.post('/api/sweets', {
    name: data.sweet,
  });
};
