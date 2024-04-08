const express=require("express");
const router=express.Router();

const {
    SignUpUser,
}=require("../auth/signup");

router.route('/SignUp').post(SignUpUser);

module.exports=router;