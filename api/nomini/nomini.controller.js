const {add,update,find,customernominifind,remove,removecustomernomini} = require("./nomini.services")
const {SERVERERROR,NOTFOUND,UPDATEMSG,DATADELETE,DATAADD}=require("../../lang/en");
/**
 * Get Nomini information by Nomini id
 */

const getNominiById = (req, res) => {
    find(req.params.id, (err, result) => {
        if (err) {
            res.status(500).json({
                messgae: SERVERERROR
            });
        }
        else if (result.length) {
            res.status(200).json({
                data: result
            });
        }
        else {
            res.status(400).json({
                messgae: NOTFOUND
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
                messgae:SERVERERROR
            });
        }
        else if (result.length) {
            res.status(200).json({
                data: result
            });
        }
        else {
            res.status(400).json({
                messgae: NOTFOUND
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
                messgae:SERVERERROR
            });
        }

        else if(result.affectedRows){
            res.status(200).json({
                messgae:DATADELETE
            });
        }
        else{
            res.status(400).json({
                messgae:NOTFOUND
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
                messgae:SERVERERROR
            });
        }

        else if(result.affectedRows){
            res.status(200).json({
                messgae:DATADELETE
            });
        }
        else{
            res.status(400).json({
                messgae:NOTFOUND
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
                messgae:SERVERERROR
            });
        }

        else if(result.affectedRows){
            res.status(200).json({
                messgae:UPDATEMSG
            });
        }
        else{
            res.status(400).json({
                messgae:NOTFOUND
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
                messgae:SERVERERROR
            });
        }
        else{
            data.id=result.insertId;
            res.status(201).json({
                messgae:DATAADD,
                data:data
            });  
        }
    });
}


module.exports = { getNominiById, findCustomerNomini ,removeNominiById,removeNominiesByCustomerId,updateNomini,addNomini}