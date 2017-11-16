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
router.get('/tableInfo', function(req, res, next){
    Convergence.showTable(function(err,rows){
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

router.get('/feature_fluent', function(req, res, next){
    Convergence.discrbeTable(function(err,rows){
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