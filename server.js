const express=require('express');
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