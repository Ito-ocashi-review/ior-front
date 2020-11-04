import { Types, Schema } from 'mongoose';
import { getOrCreateModel } from './utils/mongoose-utils';

export interface IReview {
  _id: Types.ObjectId;
  star: number;
  comment: string;
}

const schema = new Schema<IReview>({
  star:  { type: Number },
  comment: { type: String },
  reviewer: { type: Schema.Types.ObjectId },
});

export default getOrCreateModel<IReview>('Review', schema);
