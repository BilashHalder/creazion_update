const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}


const update = () => (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}

const findById = (id, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}

const findByEmail = (email, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}

const findByPhone = (id, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
    });
}   

const remove = (id, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
    });
}   
module.exports={add,update,findById,findByEmail,findByPhone,remove}