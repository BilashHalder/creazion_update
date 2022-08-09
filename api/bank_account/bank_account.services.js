const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}


const update = () => (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}


const findbyAccount = (id, callBack) => {
    dbcon.query('SELECT * FROM bank_account WHERE account_no=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const find = (id, callBack) => {
    dbcon.query('SELECT * FROM bank_account WHERE user_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const remove = (id, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
    });
}  
 
module.exports={add,update,findbyAccount,find,remove}