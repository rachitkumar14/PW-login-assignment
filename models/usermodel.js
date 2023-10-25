const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:[true,'Email is required'],
    },
    password:{
        type:String,
        maxLenght:[10,'Password must be less than or equal to 10 characters'],
       required:true
    }
})
module.exports=mongoose.model('user',userSchema);