const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    email:String,
    password:String,
    age:Number,
    role:{type:String, default:"customer"} //{type:String,enum:["customer","seller"], default:"customer"}
})

const UserModel= mongoose.model("user", userSchema)

module.exports={
    UserModel
}