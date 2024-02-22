const mongoose=require('mongoose');

const Get=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com');

    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number
    })

    const ProductModel=mongoose.model('products',ProductSchema);
    let data=await ProductModel.find();
    console.log(data);

}
Get()