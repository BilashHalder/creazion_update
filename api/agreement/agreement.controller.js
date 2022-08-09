const {add,find,remove,findcustomer,updateprint,updateupload}=require("./agreement.services")
const findAgreement=(req,res)=>{
find(req.params.id,(err,result)=>{
    if(err)
    res.status(500).json({
        message:"Internal Server Error"
    });
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
const findAgreementCustomer=(req,res)=>{
    findcustomer(req.params.id,(err,result)=>{
        if(err)
        res.status(500).json({
            message:"Internal Server Error"
        });
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

const updatePrint=(req,res)=>{
    updateprint(req.params.id,(err,result)=>{
        if(err)
        res.status(500).json({
            message:"Internal Server Error"
        });
        else if(result.affectedRows){
            res.status(200).json({
                message:"data updated"
            }); 
        }
        else{
            res.status(400).json({
                message:"data not found"
            });  
        }
    });
}

const updateUpload=(req,res)=>{
    updateupload(req.params.id,"myfile.pdf",(err,result)=>{
        if(err)
        res.status(500).json({
            message:"Internal Server Error"
        });
        else if(result.affectedRows){
            res.status(200).json({
                message:"data updated"
            }); 
        }
        else{
            res.status(400).json({
                message:"data not found"
            });  
        }
    });
}



const removeAgreement=(req,res)=>{
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


    const addAgreement=(req,res)=>{
        let id=req.params.id;
        findcustomer(id,(err,result)=>{
            if(err){
                res.status(500).json({
                    message:"Internal Server Error"
                });
            }
            
            else if(result.length){
                res.status(200).json(
                    {
                        message:"Already Addded"
                    }
                ); 
            }
            else{
                add(id,(err,result)=>{
                    if(err)
                    {
                        res.status(500).json({
                            message:"Internal Server Error"
                        });
                    }
                    else{
                        res.status(201).json({
                            message:"Agreement Added"
                        });  
                    }
                });    
            }
        });

       
    }
module.exports={findAgreement,findAgreementCustomer,updateUpload,updatePrint,removeAgreement,addAgreement}