const express=require("express");
const router=express.Router();

const {
    SignUpUser,
    getAllUserInfo,
}=require("../auth/signup");

const {
    business_register,
    getAllBusinessInfo,
}=require('../auth/business_register');

router.route('/SignUp').post(SignUpUser);
router.route('/usersInfo').get(getAllUserInfo);
router.route('/business_register').post(business_register);
router.route('/getbusinessInfo').get(getAllBusinessInfo);

module.exports=router;   