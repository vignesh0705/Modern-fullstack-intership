import mongoose from "mongoose";
const productSchema=mongoose.Schema({
   name:{
    type:String,
    unique:true,
    required:true,
   },
   price:{
    type:Number,
    required:true,
   }
})
export const ProductModel=mongoose.models.productSchema||mongoose.model("product",productSchema);