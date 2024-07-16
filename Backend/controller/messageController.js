import { Message } from "../models/messageSchema.js";

export const sendMessage = async(req,res)=>{
    try {

        const {Name,email,subject,message} = req.body;


        if(!Name || !email || !subject || !message){
            return res.status(400).json({
                success:false,
                message:"All fields are Mandatory",
            });
        }

        await Message.create({Name,email,subject,message});
        res.status(200).json({
            success:true,
            message:"Message successfully sent",
        });

    } catch (error) {
       if(error.name==="ValidationError"){
        let errorMessage =""
        if(error.errors.Name){
            errorMessage += error.errors.Name.message + " , ";
        }
        if(error.errors.email){
            errorMessage += error.errors.email.message + " , ";
        }
        if(error.errors.subject){
            errorMessage += error.errors.subject.message + " , ";
        }
        if(error.errors.message){
            errorMessage += error.errors.message.message + " , ";
        }

        return res.status(400).json({success:false , message: errorMessage});
       }
   

       return res.status(500).json({
        success:false,
        message:"unknown error",
       })
    }
};