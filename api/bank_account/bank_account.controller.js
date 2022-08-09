const {find,findbyAccount}=require("./bank_account.services")


const userBankInfo=(req,res)=>{
   find(req.params.id,(err,result)=>{
   if(err){
    res.status(500).json({
        message:"inetrnal Server Error"
    });
   }
   else if(result.length){
    res.status(200).json(result);
   }
   else{
    res.status(400).json({
        message:"data not found"
    });
   }
   });
}

const findByAccountNumber=(req,res)=>{
    findbyAccount(req.params.id,(err,result)=>{
        if(err){
         res.status(500).json({
             message:"inetrnal Server Error"
         });
        }
        else if(result.length){
         res.status(200).json(result);
        }
        else{
         res.status(400).json({
             message:"data not found"
         });
        }
        }); 
}

module.exports={userBankInfo,findByAccountNumber}