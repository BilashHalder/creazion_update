const {add,update,findById,findByEmail,findByPhone,remove,updatepass}=require("./customer.services");

const FindById=(req,res)=>{
    findById(req.params.id,(err,result)=>{
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

const FindByEmail=(req,res)=>{
    findByEmail(req.params.id,(err,result)=>{
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

const FindByPhone=(req,res)=>{
    findByPhone(req.params.id,(err,result)=>{
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
const addCustomer=(req,res)=>{
    let data=req.body;
    add(data,(err,result)=>{
        if(err)
        {
            res.status(500).json({
                messgae:"internal Server Error"
            });
        }
        else{
            data.customer_id=result.insertId;
            res.status(201).json(data);  
        }
    });
    }
    

const updateCustomer=(req,res)=>{
        let data=req.body;
        update(data,(err,result)=>{
            if(err)
            res.status(500).json({messgae:"internal Server error"});
            else{
                res.status(200).json({
                    messgae:"data updated"
                });
            }
        });
    }
    
    const removeCustomer=(req,res)=>{
        remove(req.params.id,(err,result)=>{
            if(err){
            res.status(500).json({
                message:"Internal Server Error"
            });
            }
            else{
                if(result.affectedRows){
                    res.status(200).json({
                        message:"customer information deleted"
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

module.exports={FindById,FindByEmail,FindByPhone,addCustomer,updateCustomer,removeCustomer}