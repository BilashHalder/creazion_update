const dbcon = require("../../config/dbconfig");

const add = (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}


const update = () => (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}



const find = (id, callBack) => {
    dbcon.query('', [], (err, result, fields) => {

    });
}


const remove = (id, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
    });
}  
 
module.exports={add,update,find,remove}