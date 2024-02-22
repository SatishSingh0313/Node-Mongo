const mongoose=require('mongoose');

const Insert=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com');

    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number
    })

    const ProductModel=mongoose.model('products',ProductSchema);
    let data=new ProductModel({name:"Iphone 14",brand:"Apple",price:4500});
    let result=await data.save();
    console.log(result);
}
Insert();

