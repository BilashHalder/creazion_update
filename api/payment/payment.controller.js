const {add,modify,find,findByCutomerId,remove}=require("./payment.services");

const addPayment=(req,res)=>{

    //validate the payment object must implemented


let data=req.body;

add(data,(err,result)=>{
if(err)
{
    res.status(500).json({
        message:"ineternal Server Error"
    });
}
else{
    find(result.insertId,(err,result)=>{
        if(err){
            res.status(200).json({
                message:"payment added"
            });
        }
        else{
            res.status(200).json({
              data:result  
            });
        }
    })
    
}
});


}

/*********************
 * Find By payment id
 *********************/

const findPayment=(req,res)=>{
    find(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                msg:"internal Server Error"
            });
        }
        else{
            if(result.length==0){
                res.status(404).json({
                    message:"data not found"
                })
            }
           else{
            res.status(200).json({
                data:result
            });
           }
        }
    });
}


/*********************
 * Find all payments by customer id
 *********************/


const findCustomerPayments=(req,res)=>{
    findByCutomerId(req.params.id,(err,result)=>{
if(err){
    res.status(500).json({
        message:"internal Server Error"
    })
}
else{
    if(result.length){
        res.status(200).json({
            data:result
        });
    }
    else{
        res.status(400).json({
            message:"data not found"
        });
    }
   
}
    });

}


/*********************
 * remove payment information by payment id
 *********************/

const removePayment=(req,res)=>{
remove(req.params.id,(err,result)=>{
if(err){
res.status(500).json({
    message:"Internal Server Error"
});
}
else{
    if(result.affectedRows){
        res.status(200).json({
            message:"data deleted"
        });
    }
   else{
    res.status(400).json({
        message:"data not valid"
    });
   }
}
});
}


/*********************
 * Update payment information 
 *********************/
const updatePayment=(req,res)=>{

    let data=req.body;
    modify(data,(err,result)=>{
        if(err)
        res.status(500).json({messgae:"internal Server error"});
        else{
            res.status(200).json({
                messgae:"data updated"
            });
        }
    });

}

module.exports={addPayment,findPayment,findCustomerPayments,removePayment,updatePayment}
