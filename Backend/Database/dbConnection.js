import mongoose from "mongoose";


export const dbConnection =()=>{
    mongoose.connect(process.env.mongo_URL,{dbName:"Mern_project"}).then(()=>{
        // if db mai kuch problem aayi toh connect mai ja kar connect with mongodb driver then copy ans paste and true ke badd remove all
        console.log('connected to database !');
    }).catch((err)=>{
        console.log('some error occuered to connect to DB',err);
    });
}