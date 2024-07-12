import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name required!"],
        minLength:[3,"Name must contain 3 Characters"],
    },
    email:{
        type:String,
        required:[true,"Email required!"],
        validator:[validator.isEmail,"pleaae provide valid email"]
    },
    subject:{
        type:String,
        required:[true,"Subject required!"],
        minLength:[5,"Subject must connect  must contain at least 5 Characters"],
    },
    meassage:{
        type:String,
        required:[true,"Message required!"],
        minLength:[10,"Message  must contain 10 Characters"],
    },
});

export const Message=mongoose.model("Message",messageSchema);