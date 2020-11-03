import mongoose from 'mongoose';
import { createSchema, Type, typedModel } from 'ts-mongoose';
import UserSchema from './User';

const ReviewSchema = createSchema(
  {
    star:  Type.number,
    comment: Type.string,
    reviewer: Type.ref(Type.objectId()).to('User', UserSchema),
  },
);

export default mongoose.models.Review || typedModel('Review', ReviewSchema);
