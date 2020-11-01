import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { connectDB } from '../../middlewares/connectDB';

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    // エラーが発生した場合の処理
  },
  onNoMatch(req, res) {
    // エンドポイントがない場合の処理
    throw new Error('Throws me around! Error can be caught and handled.');
  },
}).use(connectDB);
export default handler;
