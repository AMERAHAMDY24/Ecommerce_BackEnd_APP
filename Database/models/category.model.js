
import mongoose, { Types } from "mongoose";

const Schema=new mongoose.Schema({

    name:{
        type:String,
        unique:[true ,"name is required"],
        trim:true,
        minLength:[2,"too short category name"]
    },
    
    slug:{
type:String,
lowercase:true,
unique:[true ,"slug is required"],
required:true
},

    image:String,

    createdBy:{
        type:Types.ObjectId,
        ref:"User"
    }

},{
    timestamps:true,versionKey:false
})

export const Category=mongoose.model("Categry",Schema)