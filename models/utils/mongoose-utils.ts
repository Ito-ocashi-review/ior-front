import mongoose, {
  Model, Document, ConnectionOptions, Schema,
} from 'mongoose';

export const getMongoUri = (): string => {
  const { env } = process;

  return env.MONGO_URI || 'mongodb://mongo:27017/ito-ocashi-review';
};

export const getModelSafely = <T>(modelName: string): Model<T & Document> | null => {
  if (mongoose.modelNames().includes(modelName)) {
    return mongoose.model<T & Document>(modelName);
  }
  return null;
};

export const getOrCreateModel = <T>(modelName: string, schema: Schema<T>): Model<T & Document> => {
  if (mongoose.modelNames().includes(modelName)) {
    return mongoose.model<T & Document>(modelName);
  }
  return mongoose.model<T & Document>(modelName, schema);
};

export const mongoOptions: ConnectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
