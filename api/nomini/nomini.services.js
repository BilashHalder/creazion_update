const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('INSERT INTO nomini(name,dob, customer_id) VALUES (?,?,?)', [data.name,data.dob,data.customer_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const update = (data, callBack) => {
    dbcon.query('UPDATE nomini SET name=?,dob=?,customer_id=? WHERE id=?', [data.name,data.dob,data.customer_id,data.id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const find = (id, callBack) => {
    dbcon.query('SELECT * FROM nomini WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const customernominifind = (id, callBack) => {
    dbcon.query('SELECT * FROM nomini WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



const remove = (nominiid, callBack) => {
    dbcon.query('DELETE FROM nomini WHERE id=?', [nominiid], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}   



const removecustomernomini = (customerId, callBack) => {
    dbcon.query('DELETE FROM nomini WHERE customer_id=?', [customerId], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}





module.exports={add,update,find,customernominifind,remove,removecustomernomini}