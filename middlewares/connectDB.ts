import mongoose from 'mongoose';
import { NextApiResponse } from 'next';

const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/ito-ocashi-review';

const connection = {
  isConnected: null,
};

export async function connectDB(req: { dbClient: any; db: any; }, res: NextApiResponse, next: () => any):Promise<any> {
  if (connection.isConnected != null) {
    return next();
  }

  const db = await mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;

  // eslint-disable-next-line no-console
  console.log('DB connected!');

  return next();
}
