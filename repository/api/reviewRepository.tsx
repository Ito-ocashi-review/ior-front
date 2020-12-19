import { postAxios } from '../axios';

type data = {
  sweet: string,
  comment: string,
  rating: string,
}

export const postReview = (data:data):Promise<any> => {
  return postAxios.post('/api/reviews', {
    sweetId: data.sweet,
    star: data.rating,
    comment: data.comment,
  });
};
