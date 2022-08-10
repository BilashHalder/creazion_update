const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('INSERT INTO customer_documents(user_id,pan_no,pan_verified,pan_verified_by,adhar,adhar_verified,adhar_verified_by) VALUES (?,?,?,?,?,?,?)',
     [data.user_id,data.pan_no,data.pan_verified,data.pan_verified_by,data.adhar,data.adhar_verified,data.adhar_verified_by], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const update =(data, callBack) => {
    dbcon.query('UPDATE customer_documents SET pan_no=?,pan_verified=?,pan_verified_by=?,adhar=?,adhar_verified=?,adhar_verified_by=? WHERE user_id=?',
     [data.pan_no,data.pan_verified,data.pan_verified_by,data.adhar,data.adhar_verified,data.adhar_verified_by,data.user_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



const find = (id, callBack) => {
    dbcon.query('SELECT * FROM customer_documents WHERE user_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const findadhar=(id,callBack)=>{
    dbcon.query('SELECT * FROM customer_documents WHERE adhar=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    }); 
}


const findpan=(id,callBack)=>{
    dbcon.query('SELECT * FROM customer_documents WHERE pan_no=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    }); 
}

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM customer_documents WHERE user_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}  
 
module.exports={add,update,find,remove,findpan,findadhar}