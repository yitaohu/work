var db = require('../dbconnection');
var Convergence = {
    getAllData:function(callback) {
        return db.query("SELECT DISTINCT Platform FROM feature_fluent ORDER BY Platform", callback);
    },
};
module.exports=Convergence;