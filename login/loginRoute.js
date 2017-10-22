let express = require('express');
let route = express.Router();
let loginController = require('./loginController.js');
Login = require('./loginModel.js');
global.config = require('../config/config');
let jwt = require('jsonwebtoken');
let jwt_secret = "shhh";

route.get('/login',function(req,res){
    loginController.getLogin(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/login/:_id',function(req,res){
	let id = req.params._id;
    loginController.getLoginById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/login',function(req,res){
    let ptgs = req.body;
    loginController.createLogin(ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/login/:_id',function(req,res){
    loginController.removeLogin(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/login/:_id',function(req,res){
    let ptgs = req.body;
    loginController.updateLogin(req.params._id,ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.post('/login/authenticate', function(req, res){
    let data = {
        Username: req.body.Username,
        Password: req.body.Password
    };
    Login.findOne(data).lean().exec(function(err, login){
        if(err){
            return res.json({error: true});
        }
        if(!login){
            return res.status(404).json({'message':'User not found!'});
        }
        let token = jwt.sign(login, global.config.jwt_secret, {
            expiresIn: 1440 // expires in 1 hour
        });
        res.json({error:false, token: token});
    })
});

module.exports = route;
