const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('INSERT INTO admin(name, phone, email, pass) VALUES (?,?,?,?)', [data.name,data.phone,data.email,data.pass], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const update = (data, callBack) => {
    dbcon.query('UPDATE admin SET name=?,phone=?,email=?,pass=? WHERE admin_id=?', 
    [data.name,data.phone,data.email,data.pass,data.admin_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findById = (id, callBack) => {
    dbcon.query('SELECT * FROM admin WHERE admin_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findByEmail = (email, callBack) => {
    dbcon.query('SELECT * FROM admin WHERE email=?', [email], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findByPhone = (id, callBack) => {
    dbcon.query('SELECT * FROM admin WHERE phone=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}   

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM admin WHERE admin_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}   
module.exports={add,update,findById,findByEmail,findByPhone,remove}