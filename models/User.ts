import { model, Schema, Document } from 'mongoose';

interface User extends Document {
    name: string;
    displayName: string;
    email: string;
    password: string;
    filePath: string;
    fileName: string;
    fileFormat: string;
    fileSize: number;
}

const userSchema:Schema = new Schema<User>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<User>('User', userSchema);
