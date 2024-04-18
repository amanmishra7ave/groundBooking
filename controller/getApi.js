const express=require('express')
const router=express.Router();
const SignUp=require('../models/postgreSQL/SignUp.model');

// Route to fetch all names and phone number 
router.get('/users', async(req,res)=>{
    try{
        // Fetch all records from the database
        const users=await SignUp.findAll();

        // Extract names and phone numbers from the records
        const userData=users.map(users=>({
            name:users.name,
            phoneNumbers:users.phoneNumbers
        }));

        // Send the extracted data as JSON response
        res.statusCode(200).json(userData);
    } catch(error){
        // Handle any errors
        console.log('Error fetching users:', error);
        res.status(500).json({error:'Internal server error'});
    }
});

module.exports=router