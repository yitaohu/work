var express = require('express');
var router = express.Router();
var Convergence=require('../model/convergence');

router.get('/',function(req,res,next){
    Convergence.getAllData(function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else
        {
        res.json(rows);
        }
    });
});
module.exports=router;