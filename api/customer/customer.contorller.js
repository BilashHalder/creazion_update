const {add,update,findById,findByEmail,findByPhone,remove,updatepass}=require("./customer.services");
const {SERVERERROR,NOTFOUND,UPDATEMSG,DATADELETE,DATAINVALID}=require("../../lang/en");
const FindById=(req,res)=>{
    findById(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                msg:SERVERERROR
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

const FindByEmail=(req,res)=>{
    findByEmail(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                msg:SERVERERROR
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

const FindByPhone=(req,res)=>{
    findByPhone(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                msg:SERVERERROR
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
const addCustomer=(req,res)=>{
    let data=req.body;
    add(data,(err,result)=>{
        if(err)
        {
            res.status(500).json({
                messgae:SERVERERROR
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
            res.status(500).json({messgae:SERVERERROR});
            else{
                res.status(200).json({
                    messgae:UPDATEMSG
                });
            }
        });
    }
    
    const removeCustomer=(req,res)=>{
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

module.exports={FindById,FindByEmail,FindByPhone,addCustomer,updateCustomer,removeCustomer}