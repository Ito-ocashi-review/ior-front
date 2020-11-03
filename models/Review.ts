import { createSchema, Type, typedModel } from 'ts-mongoose';
import { UserSchema } from './User';

const ReviewSchema = createSchema(
  {
    star:  Type.number,
    comment: Type.string,
    reviewer: Type.ref(Type.objectId()).to('User', UserSchema),
  },
);

export default typedModel('Review', ReviewSchema);
