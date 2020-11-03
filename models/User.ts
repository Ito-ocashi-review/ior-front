import mongoose, { model, Schema, Document } from 'mongoose';
import crypto from 'crypto';

interface User extends Document {
    name: string;
    displayName: string;
    email: string;
    password: string;
    filePath: string;
    fileName: string;
    fileFormat: string;
    fileSize: number;
    isPasswordValid():boolean;
    createUserByUsername(): User;
}

// TODO fix schema
const userSchema:Schema = new Schema<User>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  displayName: {
    type: String,
  },
  email: {
    type: String,
    required: false,
    unique: true,
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

function generatePassword(password:string) {

  const hasher = crypto.createHash('sha256');
  const passwordSeed = process.env.PASSWORD_SEED || '';
  hasher.update(passwordSeed + password);

  return hasher.digest('hex');
}

userSchema.methods.isPasswordValid = function(password:string):boolean {
  return this.password === generatePassword(password);
};

userSchema.statics.createUserByName = function(name:string, password:string):User {
  const hashedPassword = generatePassword(password);
  return this.create({ name, password: hashedPassword });
};

export default mongoose.models.User || model<User>('User', userSchema);
