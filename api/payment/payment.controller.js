const {add,modify,find,findByCutomerId,remove}=require("./payment.services");
const {SERVERERROR,NOTFOUND,UPDATEMSG,DATAADD,DATAINVALID,DATADELETE}=require("../../lang/en");
const addPayment=(req,res)=>{

    //validate the payment object must implemented


let data=req.body;

add(data,(err,result)=>{
if(err)
{
    res.status(500).json({
        message:SERVERERROR
    });
}
else{
    find(result.insertId,(err,result)=>{
        if(err){
            res.status(200).json({
                message:DATAADD
            });
        }
        else{
            res.status(200).json({
              data:result  
            });
        }
    });
    
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
                message:SERVERERROR
            });
        }
        else{
            if(result.length==0){
                res.status(404).json({
                    message:NOTFOUND
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
        message:SERVERERROR
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
            message:NOTFOUND
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
    message:SERVERERROR
});
}
else{
    if(result.affectedRows){
        res.status(200).json({
            message:DATADELETE
        });
    }
   else{
    res.status(400).json({
        message:DATAINVALID
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
        res.status(500).json({messgae:SERVERERROR});
        else{
            res.status(200).json({
                messgae:UPDATEMSG
            });
        }
    });

}

module.exports={addPayment,findPayment,findCustomerPayments,removePayment,updatePayment}
