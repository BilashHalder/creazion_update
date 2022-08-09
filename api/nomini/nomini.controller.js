const {add,update,find,customernominifind,remove,removecustomernomini} = require("./nomini.services")

/**
 * Get Nomini information by Nomini id
 */

const getNominiById = (req, res) => {
    find(req.params.id, (err, result) => {
        if (err) {
            res.status(500).json({
                messgae: "internal Server error"
            });
        }
        else if (result.length) {
            res.status(200).json({
                data: result
            });
        }
        else {
            res.status(400).json({
                messgae: "data not found"
            });
        }
    });
}


/**
 * Get Nomini information by customer id
 */

const findCustomerNomini = (req, res) => {
    customernominifind(req.params.id, (err, result) => {
        if (err) {
            res.status(500).json({
                messgae: "internal Server error"
            });
        }
        else if (result.length) {
            res.status(200).json({
                data: result
            });
        }
        else {
            res.status(400).json({
                messgae: "data not bbbb found"
            });
        }

    });
}


/**
 * Remove Nomini information by Nomini id
 */


const removeNominiById=(req,res)=>{
    remove(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                messgae:"Internal Server Error"
            });
        }

        else if(result.affectedRows){
            res.status(200).json({
                messgae:"data deleted successfully"
            });
        }
        else{
            res.status(400).json({
                messgae:"data not found"
            }); 
        }
    });   

}

/**
 * Remove All Nomini information by Customer id
 */
const removeNominiesByCustomerId=(req,res)=>{
    removecustomernomini(req.params.id,(err,result)=>{
        if(err){
            res.status(500).json({
                messgae:"Internal Server Error"
            });
        }

        else if(result.affectedRows){
            res.status(200).json({
                messgae:"data deleted successfully"
            });
        }
        else{
            res.status(400).json({
                messgae:"data not found"
            }); 
        }
    });

}

/**
 * Update Nomini Information By Nomini Object
 */


const updateNomini=(req,res)=>{
    let data=req.body;
    //before call microservice its should be alidate the data
    update(data,(err,result)=>{
        if(err){
            res.status(500).json({
                messgae:"Internal Server Error"
            });
        }

        else if(result.affectedRows){
            res.status(200).json({
                messgae:"data Updated successfully"
            });
        }
        else{
            res.status(400).json({
                messgae:"data not found"
            }); 
        }
    });
}



/**
 * Add New  Nomini Information By Nomini Object
 */


const addNomini=(req,res)=>{
    data=req.body;

    //before call microservice its should be validate the data

    add(data,(err,result)=>{
        if(err)
        {
            res.status(500).json({
                messgae:"internal Server Error"
            });
        }
        else{
            data.id=result.insertId;
            res.status(201).json({
                messgae:"nomini created",
                data:data
            });  
        }
    });
}


module.exports = { getNominiById, findCustomerNomini ,removeNominiById,removeNominiesByCustomerId,updateNomini,addNomini}