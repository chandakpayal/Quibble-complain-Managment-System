import mongoose from "mongoose";

const userComplain = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    branch:{
        type:String,
        required:true,
      
    },
    subject:{
        type:String,
        required:true,
    },
    complain:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default: "Pending",
    }


})


export default mongoose.model("complain",userComplain);

