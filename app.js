require('dotenv').config();
const express=require("express");
const app=express();
app.use(express.json());
/***************************
 * Import router of Models
 ****************************/
const AdminRoute=require("./api/admin/admin.route");
const PaymentRoute=require("./api/payment/payment.router");

/*********************
 * Define all the Routes
 *********************/
app.use("/api/admin",AdminRoute);
app.use("/api/payment",PaymentRoute);



/************************
 * Api Documentaion Url
 *************************/
app.get("/",(request,response)=>{
    response.send("API Documentation");
});


/****************************
 * To handle all invalid request
 * ***************************/

app.all("*",(request,response)=>{
response.status(500).json({
    status:"failed",
    message:"Invalid request"
});
});

/*Server Initilization */

app.listen(process.env.APP_PORT,()=>{
    console.log(`Api Server Running on Port No : ${process.env.APP_PORT}`);
});