const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const {SERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE}=require("../../lang/en");
const {add,update,findById,findByEmail,findByPhone,remove}=require("./admin.services");
const addAdmin=async (req,res)=>{
    let data=req.body;
    data.pass = bcrypt.hashSync(data.pass, salt);
    findByEmail(data.email,(err,result1)=>{
        if(err)
        res.status(500).json({
            message:SERVERERROR  
        });
        else if(result1.length){
            res.status(200).json({
                message:EMAILEXIST  
            });   
        }
        else{
            findByPhone(data.phone,(err,result2)=>{
                if(err){
                    res.status(500).json({
                        message:SERVERERROR 
                    });  
                }
                else if(result2.length){
                    res.status(200).json({
                        message:PHONEXIST  
                    });  
                }
                else{
                    add(data,(err,result3)=>{
                        if(err){
                            res.status(500).json({
                                message:err 
                            });
                        }
                        else{
                            res.status(200).json({
                                message:"Registration Sucessfull" 
                            });  
                        }
                    }) 
                }
            }); 
        }
    })

    
 }

const getAdmin=(req,res) =>{
    findById(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                message:SERVERERROR
            });
        }
        else{
            if(result.length){
                res.status(200).json(result);
            }
            else{
                res.status(400).json({
                    message:NOTFOUND
                });  
            }
        }
    });
      
    } 

  const getAdminByEmail=(req,res) =>{
    let data=req.params.id;
    findByEmail(data,(err,result)=>{
        if(err){
            res.status(500).json({
                message:SERVERERROR
            });
        }
        else{
            if(result.length){
                res.status(200).json(result);
            }
            else{
                res.status(400).json({
                    message:NOTFOUND
                });  
            }
        }
    });  
  } 

  const getAdminByPhone=(req,res) =>{
    findByPhone(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                message:SERVERERROR
            });
        }
        else{
            if(result.length){
                res.status(200).json(result);
            }
            else{
                res.status(400).json({
                    message:NOTFOUND
                });  
            }
        }
    });  
  } 

  const updateAdmin=(req,res) =>{
    res.status(200).json({
        message:"not allowed"
    });  
  } 

  const removeAdmin=(req,res) =>{
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
                    message:NOTFOUND
                });
            }
            
        }
    });
     
  } 


  /**
   * Helping function
   */

 
module.exports={addAdmin,getAdminByEmail,removeAdmin,updateAdmin,getAdminByPhone,getAdmin}
    