const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('INSERT INTO customer(name,phone,email,customer_type,refereed_by,stat,pass,image) VALUES (?,?,?,?,?,?,?,?)', 
    [data.name,data.phone,data.email,data.customer_type,data.refereed_by,data.stat,data.pass,"default.png"], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const updatepass=(data,callBack)=>{
    //data.newpass,data.userid
    dbcon.query('UPDATE customer SET pass=? WHERE customer_id=?', [data.newpass,data.user_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const update =(data, callBack) => {
    dbcon.query('UPDATE customer SET name=?,phone=?,email=?,customer_type=?,refereed_by=?,stat=? WHERE customer_id=?',
     [data.name,data.phone,data.email,data.customer_type,data.refereed_by,data.stat,data.customer_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findById = (id, callBack) => {
    dbcon.query('SELECT * FROM customer WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findByEmail = (email, callBack) => {
    dbcon.query('SELECT * FROM customer WHERE email=?', [email], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findByPhone = (phone, callBack) => {
    dbcon.query('SELECT * FROM customer WHERE phone=?', [phone], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}   

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM customer WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}   
module.exports={add,update,findById,findByEmail,findByPhone,remove,updatepass}