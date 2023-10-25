// const userRegisterData = require('../models/usermodel');
const userData = require('../models/usermodel');
exports.registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const register = await userData.create({
            name,
            email,
            password
        })
        res.status(200).json({
            success:true,
            message:"User Registerd Successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:`user not registered error : ${error}`
        })
    }
}
exports.loginUser=async(req,res)=>{
    // // try{
    //     const {email,password}=req.body;
    try{
    const {email,password}=req.body;
        const login = await userData.findOne({email})
        if(login.password == password)
        {
            res.status(200).json({
                success:true,
                message:"User Login successfully"
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:"Please Ensure that Both email and password are correct or not"
            })
        }
    }
    catch(error){
        res.status(401).json({
            success:false,
            message:`Error in login Data :${error}`
        })
    }
}