import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
  },
});
// export interface User {
//     name: string;
//     displayName: string;
//     email: string;
//     password: string;
//     filePath: string;
//     fileName: string;
//     fileFormat: string;
//     fileSize: number;
// }
