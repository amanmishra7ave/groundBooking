const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGOOSE_PRIVATE_KEY);
        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.error("Error connecting to the database:");
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDb;


// const mongoose=require("mongoose");

// const connectDb=async()=>{
//     try {
//         const connect=await mongoose.connect(process.env.MONGOOSE_PRIVATE_KEY)
//     console.log(
//         "Database connected: ",
//         connect.connection.host,
//         connect.connection.name
//     )
//     }catch(err){
//         console.log("There is some problem")
//         console.log(err);
//         process.exit(1);
//     }
// };

// module.exports=connectDb;