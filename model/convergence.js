var db = require('../dbconnection');
var Convergence = {
    getAllData:function(callback) {
        return db.query("SELECT DISTINCT Platform FROM feature_fluent ORDER BY Platform", callback);
    },
    showTable:function(callback) {
        return db.query("SHOW TABLES",callback);
    },
    discrbeTable:function(callback) {
        return db.query("DESCRIBE feature_fluent",callback);
    },
};
module.exports=Convergence;