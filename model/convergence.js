var db = require('../dbconnection');
var Convergence = {
    getAllData:function(callback) {
        return db.query("SELECT Testdir FROM reg_19 WHERE Testname='2cell-stack_pemfc' AND Platform='win64' AND TimeDateStamp between '2017-11-15 16:50:39' and '2017-11-18 16:50:39'", callback);
    },
    showTable:function(callback) {
        return db.query("SHOW TABLES",callback);
    },
    discrbeTable:function(callback) {
        return db.query("DESCRIBE feature_fluent",callback);
    },
};
module.exports=Convergence;