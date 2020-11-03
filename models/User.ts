import { Types, Schema } from 'mongoose';
import { getOrCreateModel } from './utils/mongoose-utils';

export interface IUser {
  _id: Types.ObjectId;
  name: string;
}

const schema = new Schema<IUser>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

export default getOrCreateModel<IUser>('User', schema);
