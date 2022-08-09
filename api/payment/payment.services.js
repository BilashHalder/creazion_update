const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('INSERT INTO payment(customer_id,ammount,transaction_id,payment_type,payment_verified,payment_mode) VALUES (?,?,?,?,?,?)', [data.customer_id,data.ammount,data.transaction_id,data.payment_type,data.payment_verified,data.payment_mode], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const update = () => (data,callBack) => {
    dbcon.query('UPDATE payment SET customer_id=?,ammount=?,transaction_id=?,payment_type=?,payment_verified=?,payment_mode=? WHERE payment_id=?', [data.customer_id,data.ammount,data.transaction_id,data.payment_type,data.payment_verified,data.payment_mode,data.payment_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



const find = (id, callBack) => {
    dbcon.query('SELECT * FROM payment WHERE payment_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findByCutomerId = (id, callBack) => {
    dbcon.query('SELECT * FROM payment WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (id, callBack) => {
    dbcon.query('DELETE FROM payment WHERE payment_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}  
 
module.exports={add,update,find,findByCutomerId,remove}