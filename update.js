const mongoose=require('mongoose');

const Update=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com');

    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number
    })

    const ProductModel=mongoose.model('products',ProductSchema);
    let data=await ProductModel.updateOne(
        {name:"Iphone 14"},
        {$set:{price:5000,name:"Iphone 15"}} 
    )
    console.log(data);

}
Update();