let express = require('express');
let route = express.Router();
let angkatanAktualController = require('./angkatanAktualController.js');
route.get('/angkatanaktual',function(req,res){
    angkatanAktualController.getAngkatanAktual(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/angkatanaktual/:_id',function(req,res){
	let id = req.params._id;
    angkatanAktualController.getAngkatanAktualById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/angkatanaktual',function(req,res){
    let prpns = req.body;
    angkatanAktualController.createAngkatanAktual(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/angkatanaktual/:_id',function(req,res){
    angkatanAktualController.removeAngkatanAktual(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/angkatanaktual/:_id',function(req,res){
    let prpns = req.body;
    angkatanAktualController.updateAngkatanAktualById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
