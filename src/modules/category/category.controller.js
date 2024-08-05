import slugify from "slugify";

import { Category } from "../../../Database/models/category.model.js";
import { ErrorHandlerClass } from "../../utills/error-class.utilis.js";


// add category

export const addCategory=async(req,res,next)=>{

    const {name} =req.body;

    req.body.slug= slugify(req.body.name)
    let category= new Category(req.body);
    await category.save()

res.status(201).json({
message:"category added successfully"
})
     
}


// get all categories

export const allCategories= async (req,res)=>{
let categories= await Category.find()

res.status(201).json({
    message:"success",categories
})
}



// get specific category

export const specificCategory= async (req,res,next)=>{
    
    let category= await Category.findById(req.params.id)
    
    // check category exist or not
    category ||next (new ErrorHandlerClass("Category not found ",404)) 
    !category  || res.status(201).json({ message:"success",category})
    }


// update category

export const updateCategory= async (req,res,next)=>{

    req.body.slug= slugify(req.body.name)
    let updatedCategory= await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    // check category exist or not
    updatedCategory ||next (new ErrorHandlerClass("Category not found ",404)) 
   !updatedCategory  || res.status(200).json({ message:"category updated successfully",updatedCategory})
}

// delete category

export const deleteCategory= async (req,res,next)=>{
    let deletedCategory= await Category.findByIdAndDelete(req.params.id,req.body,{new:true})

  // check category exist or not
   deletedCategory || next (new ErrorHandlerClass("Category not found ",404)) 
  !deletedCategory || res.status(200).json({message:"category deleted successfully",deletedCategory})

}