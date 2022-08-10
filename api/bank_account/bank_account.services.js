const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('INSERT INTO bank_account(account_no,user_id,bank_name, bank_ifsc, bank_address) VALUES (?,?,?,?,?)', [data.account_no,data.user_id,data.bank_name,data.bank_ifsc,data.bank_address], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const update = (data, callBack) => {
    dbcon.query('UPDATE bank_account SET account_no=?,bank_name=?,bank_ifsc=?,bank_address=? WHERE user_id=?', [data.account_no,data.bank_name,data.bank_ifsc,data.bank_address,data.user_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
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
    dbcon.query('DELETE FROM bank_account WHERE user_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);   
    });
}  
 
module.exports={add,update,findbyAccount,find,remove}