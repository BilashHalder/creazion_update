const {add,update,findbyAccount,find,remove}=require("./bank_account.services")

/**
 * Get user Bank Information
 */

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

/**
 * Bank account information
 */

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

/**
 * Add New Bank Account Information 
 */

const addBankAccount=(req,res)=>{
let data=req.body;
find(data.user_id,(err,result)=>{
if(err){
    res.status(500).json({
        message:"internal server error"
    });
}
else if(result.length){
    res.status(400).json({
        message:"user bank account already added"
    });
}
else{
    findbyAccount(data.account_no,(err,result)=>{
       if(err){
        res.status(500).json({
            message:"internal server error"
        });
       }
       else if(result.length){
        res.status(400).json({
            message:"Bank account already used"
        });
       }
       else{
        add(data,(err,resultb)=>{
            
            if(err){
                res.status(500).json({
                    message:"internal server error"
                });  
            }
            else{
                if(resultb.affectedRows){
                    res.status(201).json({
                        message:"Bank Account Information Saved"
                    }); 
                }
                else{
                    res.status(500).json({
                        message:"internal server error"
                    });   
                }
            }
        });
       } 
    });  
}
});

}

/**
 * Remove User Bank Account Information By user Id 
 */

const removeBankAccount=(req,res)=>{
    remove(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                message:"inetrnal Server Error"
            });
           }
           else if(result.affectedRows){
            res.status(200).json({
                message:"data deleted"
            });
           }
           else{
            res.status(400).json({
                message:"data not found"
            });
           }  
    });

}

/**
 * Update User Bank Information 
 */
const updateBankAccount=(req,res)=>{
let data=req.body;
update(data,(err,result)=>{
    if(err){
        res.status(500).json({
            message:"inetrnal Server Error"
        });
       }
       else if(result.affectedRows){
        res.status(200).json({
            message:"data Updated"
        });
       }
       else{
        res.status(400).json({
            message:"data not found"
        });
       } 
});

}

module.exports={userBankInfo,findByAccountNumber,addBankAccount,removeBankAccount,updateBankAccount}