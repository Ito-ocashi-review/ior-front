import { axiosInstance } from '../axios';

type data = {
  sweet: string,
  comment: string,
  rating: string,
}

type user = {
  image: string,
  name: string,
}

type session = {
  accessToken: string,
  expires: string,
  user: user,
}

export const postReview = (data:data, session:session):Promise<any> => {
  axiosInstance.defaults.headers.common.Authorization = session.accessToken;
  return axiosInstance.post('/api/reviews', {
    sweetId: data.sweet,
    star: data.rating,
    comment: data.comment,
  });
};
