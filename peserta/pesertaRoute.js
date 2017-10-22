let express = require('express');
let route = express.Router();
let pesertaController = require('./pesertaController.js');
route.get('/peserta',function(req,res){
    pesertaController.getPeserta(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/peserta/:_id',function(req,res){
	let id = req.params._id;
    pesertaController.getPesertaById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/peserta',function(req,res){
    let prpns = req.body;
    pesertaController.createPeserta(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/peserta/:_id',function(req,res){
    pesertaController.removePeserta(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/peserta/:_id',function(req,res){
    let prpns = req.body;
    pesertaController.updatePesertaById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;