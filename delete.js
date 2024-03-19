const mongoose=require('mongoose');

const Delete=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com');

    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number
    })

    const ProductModel=mongoose.model('products',ProductSchema);
    let data=await ProductModel.deleteOne(
        {name:"Iphone 14"}
    )
    console.log(data);
}
Delete()