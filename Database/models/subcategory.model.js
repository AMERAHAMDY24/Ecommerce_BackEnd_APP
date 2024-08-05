import mongoose, { Types } from "mongoose";
import { type } from "os";

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
required:true

    },
category:{
type:Types.ObjectId,
ref:"Category"

},

createdBy:{
    type:Types.ObjectId,
    ref:"User"
}

},{
    timestamps:true,versionKey:false
})

export const SubCategory=mongoose.model("SubCategry",Schema)