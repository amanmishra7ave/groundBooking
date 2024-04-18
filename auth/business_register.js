const express = require('express');
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler');
const Business_register = require('../models/mongoose/bussinessSignUp.model.js');
const Database = require('../config/dbConnection.js');
const { use } = require('../routes/user.route.js');

const app = express();
const dbname = 'Business registration';
app.use(bodyParser.json());

const business_register = asyncHandler(async (req, res, next) => {
    const { business_name, business_type, food_type, open_days_per_weak } = req.body;

    if (!business_name || !business_type ||  !open_days_per_weak) {
        return res.status(400).json({ error: `All fields are required` });
    }

    try {
        const existingUser = await Business_register.findOne({ business_name });

        if (existingUser) {
            return res.status(400).json({ error: "This business name already exists" });
        }

        // await Database.connect(dbname); // Pass dbname to the database connection function
        const Business_user = new Business_register({ business_name, business_type, food_type, open_days_per_weak });
        const userDoc = await Business_user.save();
        res.status(201).json(userDoc);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ error: "Validation failed", message: errorMessages });
        }
        next(error);
    }
});

const getAllBusinessInfo = asyncHandler(async (req, res, next) => {
    try {
        const businessOwners = await Business_register.find(); // Use find() to fetch all documents

        const userData = businessOwners.map(owner => ({
            business_name: owner.business_name,
            business_type: owner.business_type,
            food_type: owner.food_type,
            open_days_per_weak: owner.open_days_per_weak
        }));
        res.status(200).json(userData);
    } catch (error) {
        console.log('Error fetching business owners:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// const getAllBusinessInfo=asyncHandler(async(req,res,next)=>{
//     try{
//         const business_owner= Business_register.find();

//         const userData=users.map(users=>({
//             business_name:business_owner.business_name, 
//             business_type:business_owner.business_type, 
//             food_type:business_owner.food_type, 
//             open_days_per_weak:business_owner.open_days_per_weak 
//         }));
//         res.statusCode(200).json(userData);
//     } catch(error) {
//         console.log('Error fetching users:',error);
//         res.status(500).json({error:'Internal server error'})
//     }
// })


module.exports = {
    business_register,
    getAllBusinessInfo,
};


// const express=require('express');
// const bodyParser=require('body-parser');
// const asyncHandler=require('express-async-handler');
// const Business_register=require('../models/mongoose/bussinessSignUp.model.js')
// const Database=require('../config/dbConnection.js');

// const app=express();
// const dbname='Business registration';
// app.use(bodyParser.json());

// const business_register=asyncHandler(async(req,res,next)=>{

//     const {business_name,business_type,food_type,open_days_per_weak}=req.body
//     if(!business_name || !business_type || !food_type || !open_days_per_weak) {
//         return res.status(400).json({error:"All field are required"});
//     }
//     try {
//         const existingUser=await Business_register.findOne({business_name});
//         if(existingUser) {
//             return res.status(400).json({error:"This business name already exist"});
//         }

//         await Database();
//         const Business_user=new Business_register({business_name,business_type,food_type,open_days_per_weak});
//         const userDoc=await Business_user.save();
//         res.status(201).json(userDoc);
//     } catch(error) {
//         if(error.business_name='ValidationErro') {
//             const errorMessages=Object.values(error.error).map(err=>err.message);
//             return res.status(400).json({error:"Validation failed",message:errorMessages});
//         }
//         next(error);
//     };
// });

// module.exports= {
//     business_register,
// }