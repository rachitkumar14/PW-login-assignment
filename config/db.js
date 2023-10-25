const mongoose= require('mongoose');

const connectToDb= async()=>{
    mongoose.connect(process.env.url)
    .then((conn)=>{  
        console.log(`Connected to Db : ${conn.connection.host}`);
    })
    .catch((error)=>{
        console.log(`Not connected :${error}`);
    })
}
module.exports=connectToDb;