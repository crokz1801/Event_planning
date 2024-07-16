import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    Name: {
        type:String,
        required: [true,"Name Required !!!"],
        minLength:[3,"must be minimim 3 chars"]
    },
    email: {
        type:String,
        required: [true,"Email Required !!!"],
        validate:[validator.isEmail,"invalid Email"]
    },
    subject: {
        type:String,
        required: [true,"SUbject Required !!!"],
        minLength:[5,"must be minimim 5 chars"]
    },
    message: {
        type:String,
        required: [true,"message Required !!!"],
        minLength:[10,"must be minimim 10 chars"]
    },

});

export const Message = mongoose.model("message",messageSchema);