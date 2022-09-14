const express = require ("express") ;
const app = express();
const mongoose = require('mongoose');
const userRoute=require("./routes/user");


mongoose.connect('mongodb+srv://ramesh:Ramesh@cluster0.jg49rud.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB connection successfull"))
.catch((err)=>{
    console.log(err);
});

app.use("/api/user",userRoute);

app.listen(5000, () => {
    console.log("backend server is running!");
});