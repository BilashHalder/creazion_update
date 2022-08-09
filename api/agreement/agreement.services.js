const dbcon = require("../../config/dbconfig");

const add = (id, callBack) => {
    dbcon.query('INSERT INTO agreement(customer_id,status) VALUES (?,0)', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const find = (id, callBack) => {
    dbcon.query('SELECT * FROM agreement WHERE agreement_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findcustomer=(id, callBack) => {
    dbcon.query('SELECT * FROM agreement WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (id, callBack) => {
    dbcon.query('DELETE FROM agreement WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const updateprint=(id, callBack)=>{
    dbcon.query('UPDATE agreement SET print_date=CURRENT_TIMESTAMP() WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const updateupload=(id,filename, callBack)=>{
    dbcon.query('UPDATE agreement SET upload_date=CURRENT_TIMESTAMP(),file_name=? WHERE customer_id=?', [filename,id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}




module.exports={add,find,remove,findcustomer,updateprint,updateupload}