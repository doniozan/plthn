let express = require('express');
let route = express.Router();
let angkatanRencanaController = require('./angkatanRencanaController.js');
route.get('/angkatanrencana',function(req,res){
    angkatanRencanaController.getAngkatanRencana(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/angkatanrencana/:_id',function(req,res){
	let id = req.params._id;
    angkatanRencanaController.getAngkatanRencanaById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/angkatanrencana',function(req,res){
    let prpns = req.body;
    angkatanRencanaController.createAngkatanRencana(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/angkatanrencana/:_id',function(req,res){
    angkatanRencanaController.removeAngkatanRencana(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/angkatanrencana/:_id',function(req,res){
    let prpns = req.body;
    angkatanRencanaController.updateAngkatanRencanaById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
