import mongoose from 'mongoose';
import { createSchema, typedModel } from 'ts-mongoose';

const UserSchema = createSchema({
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

export default mongoose.models.User || typedModel('User', UserSchema);
