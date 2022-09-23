
const { UserModel}= require("../Model/user.model")


const authorisation=(roles) =>{
    const permittedRoles=roles;
    return async(req,res,next)=>{
        console.log(roles)
        const {email}= req.body;
        const user= await UserModel.findOne({email})
        console.log(user)
        if(permittedRoles.includes(user.role)){
            next()
        }
        else{
            res.send("You are not authorised")
        }
    }
}

module.exports= authorisation