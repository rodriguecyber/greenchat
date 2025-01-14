import mongoose, { Schema } from "mongoose";

import { IUser } from "../types/types";

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    phone: { type: Number },
    email: { type: String, required: true, unique: true },
    gender: { type: String },
    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    location: { type: String },
    country: { type: String },
    isOnline: { type: Boolean, default: false },
    profile: { type: String },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model<IUser>("user", userSchema);
export default User;
