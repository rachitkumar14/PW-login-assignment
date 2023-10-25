const express= require('express');
require('dotenv').config()
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const connectToDb=require('./config/db.js')
connectToDb();
const router=require('./Router/router.js')
app.use('/',router)
module.exports=app
