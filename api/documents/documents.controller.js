const {add,update,find,remove,findpan,findadhar}=require("./documents.services");

const findDocument=(req,res)=>{
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

const addDocument=(req,res)=>{
let data=req.body;
add(data,(err,result)=>{
    if(err)
    {
        res.status(500).json({
            messgae:"internal Server Error"
        });
    }
    else{
        res.status(201).json({
            messgae:"document saved"
        });  
    }
});
}

const updateDocument=(req,res)=>{
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

const removeDocument=(req,res)=>{
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

/**
 * Pan and adhar exits or not function
 */


function adharExist(adharNo){
    findadhar(adharNo,(err,result)=>{
        if(err)
        return "error"
        else if(result.length){
            return "exist"
        }
        else{
            return "not exist"
        }
    });
}

function panExist(panNo){
    findadhar(panNo,(err,result)=>{
        if(err)
        return "error"
        else if(result.length){
            return "exist"
        }
        else{
            return "not exist"
        }
    });
}

module.exports={findDocument,addDocument,updateDocument,removeDocument}
