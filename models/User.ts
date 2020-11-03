import { createSchema, typedModel } from 'ts-mongoose';

export const UserSchema = createSchema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  displayName: {
    type: String,
  },
  password: {
    type: String,
  },
  filePath: {
    type: String,
  },
  fileFormat: {
    type: String,
  },
  fileSize: {
    type: Number,
  },
});

export const User = typedModel('User', UserSchema);
