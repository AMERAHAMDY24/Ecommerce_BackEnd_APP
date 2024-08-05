import mongoose from "mongoose";

const Schema=new mongoose.Schema({

    name:{
        type:String,
        unique:[true ,"name is required"],
        trim:true,
        minLength:[2,"too short Brand name"]
    },
    slug:{
type:String,
lowercase:true,
required:true

    },
    
    logo:string,

    createdBy:{
        type:Types.ObjectId,
        ref:"User"
    }


},{
    timestamps:true,versionKey:false
})

export const Brand=mongoose.model("Brand",Schema)