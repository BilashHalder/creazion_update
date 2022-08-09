require('dotenv').config();
const express=require("express");
const app=express();
app.use(express.json());
/***************************
 * Import router of Models
 ****************************/
const AdminRoute=require("./api/admin/admin.route");
const PaymentRoute=require("./api/payment/payment.router");
const nominiRouter=require("./api/nomini/nomini.route");
const BankAccountRouter=require("./api/bank_account/bank_account.route");
const AgreementRouter=require("./api/agreement/agreement.route");

/*********************
 * Define all the Routes
 *********************/
app.use("/api/admin",AdminRoute);
app.use("/api/payment",PaymentRoute);
app.use("/api/nomini",nominiRouter);
app.use("/api/bank",BankAccountRouter);
app.use("/api/agreement",AgreementRouter);


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