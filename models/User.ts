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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  filePath: { type: String },
  fileName: { type: String },
  fileFormat: { type: String },
  filseSize: { type: Number },
});
