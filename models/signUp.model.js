const mongoose = require('mongoose');

const SignUpSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'User name is required'],
        },
        phoneNumber: {
            type: Number,
            required: [true, "Please enter user phone number"],
            validate: {
                validator: function(v) {
                    return /^\d{10}$/.test(v); // Validate if the phone number has exactly 10 digits
                },
                message: props => `${props.value} is not a valid phone number! Must be 10 digits.`,
            },
            unique:true,
        },
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('SignUp', SignUpSchema);


// const mongoose = require('mongoose');

// const SignUpSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, 'User name is required'],
//         },
//         phoneNumber: {
//             type: Number,
//             required: [true, "Please enter user phone number"],
//             validator: function(v) {
//                 return /^\d{10}$/.test(v);
//             },
//             message:props=>`${props.value} is not valid phone number! Must be 10 digits. `
//         },
//     },
//     {
//         timestamps: true
//     }
// );

// module.exports = mongoose.model('SignUp', SignUpSchema);

// // const mongoose=require('mongoose');

// // const SignUp=mongoose.Schema(
// //     {
// //         name:{
// //             type:String,
// //             required:[true,'User name is required'],
// //         },
// //         phoneNumber:{
// //             type:Number,
// //             required:[true,"Please enter user phone number"],
// //         },
// //     },
// //     {
// //         timestamps:true
// //     }
// // );

// // mondule.exports=mongoose.model('SignUp',SignUp);