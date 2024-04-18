
const express = require('express');


// const mysql=require("mysql");

// const db=mysql.createConnection({
//     host:"ls-c908cbf2eff5962f2034e144dfde449fcebb058c.cxm2ew2ccqk7.ap-south-1.rds.amazonaws.com",
//     port:"3306",
//     user:"dbmasteruser",
//     password:"8+DhRrUr}*wF7DSGZoK0d12tLXWw0pp7",
//     database:"Database-1"
// });

// db.connect((err)=>{
//     if(err) {
//         console.log(err.message);
//         return;
//     }
//     console.log("Database connected");
// });
// const connectDb = require('./config/postgresql');
// const dotenv = require('dotenv').config();


// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use('/api', require('./routes/user.route'));
// // app.use('/api', require('./routes/user.route'))

// connectDb().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// });


// const express=require('express');
const connectDb=require('./config/dbConnection')
const dotenv=require("dotenv").config();

connectDb();
const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use("/api",require("./routes/user.route"));

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})