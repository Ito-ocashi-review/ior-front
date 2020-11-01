import { MongoClient } from 'mongodb';
import { NextApiResponse } from 'next';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ito-ocashi-review';

const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectDB(req: { dbClient: any; db: any; }, res: NextApiResponse, next: () => any):Promise<any> {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  return next();
}
