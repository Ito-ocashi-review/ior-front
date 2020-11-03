import mongoose from 'mongoose';
import { NextApiResponse } from 'next';
import { getMongoUri, mongoOptions } from '../models/utils/mongoose-utils';

const connection = {
  isConnected: null,
};

export async function connectDB(req: { dbClient: any; db: any; }, res: NextApiResponse, next: () => any):Promise<any> {
  if (connection.isConnected != null) {
    return next();
  }

  const db = await mongoose.connect(getMongoUri(), mongoOptions);

  connection.isConnected = db.connections[0].readyState;

  // eslint-disable-next-line no-console
  console.log('DB connected!');

  return next();
}
