import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  }
});

export const Admin = mongoose.model("Admin", AdminSchema);