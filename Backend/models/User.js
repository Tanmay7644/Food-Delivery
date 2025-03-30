// creating Schema for USer information

import mongoose from "mongoose";

const userSchema=mongoose.Schema({ 
    name:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    data:{
        type:Date,
        default:Date.now
    }
})

const User=mongoose.model('User',userSchema);
export default User;