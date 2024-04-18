const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    business_name: {
                    type: String,
                    required:[true,'business name is required'],
                },
    business_type:{
                    type:String,
                    enum:['ground-booking','dhaba']
                },
                food_type: {
                    type: String,
                    enum:['veg','non-veg','both'],
                },
                open_days_per_weak: {
                    type: Number,
                    min:0,
                    max:7,
                    required: [true, 'Number of open days per week is required'],
                }  
});

const Business_register = mongoose.model('Business_register', businessSchema);

module.exports = Business_register;


// const mongoose=require('mongoose')

// const BussSignUpSchema=mongoose.Schema(
//     {
//         business_name: {
//             type: String,
//             required:[true,'business name is required'],
//         },
//         business_type:{
//             type:String,
//             enum:['ground-booking','dhaba']
//         },
//         food_type: {
//             type: String,
//             enum:['veg','non-veg','both'],
//         },
//         open_days_per_weak: {
//             type: Number,
//             min:0,
//             max:7,
//             required: [true, 'Number of open days per week is required'],
//         }  
//     }
// );