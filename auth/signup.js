const express=require('express');
const bodyParser=require('body-parser');
const asyncHandler=require('express-async-handler')
const SignUp=require('../models/mongoose/signUp.model.js');
const business_register=require('../models/mongoose/bussinessSignUp.model.js')
// const SignUp=require('../models/postgreSQL/SignUp.model.js');
const Database=require('../config/dbConnection.js');

const app=express();
const dbname='User_details';
app.use(bodyParser.json());

const SignUpUser=asyncHandler(async(req,res,next)=>{

    const {name,phoneNumber}=req.body
    if(!name || !phoneNumber) {
        return res.status(400).json({error:"All fields are required"});
    }
    try{ 
        const existingUser=await SignUp.findOne({phoneNumber});
        if(existingUser) {
            return res.status(400).json({error:"Phone number already exist"});
        }
        await Database(); 
        const user=new SignUp({name,phoneNumber});    
        const userDoc=await user.save();
        res.status(201).json(userDoc);
    }catch(error){
        if(error.name=='ValidationError') {
            const errorMessages=Object.values(error.errors).map(err=>err.message);
            return res.status(400).json({error:"Validation failed",message:errorMessages});
        }
        next(error);
    }
});


const getAllUserInfo=asyncHandler(async(req,res,next)=>{
    try {
        const users=await SignUp.findAll();

        const userData=users.map(users=>({
            name:users.name,
            phoneNumber:users.phoneNumber
        }));

        res.statusCode(200).json(userData);
    } catch(error) {
        console.log('Error fetching users:',error);
        res.status(500).json({error:'Internal server error'})
    }
})



module.exports={
    SignUpUser,
    getAllUserInfo,
}