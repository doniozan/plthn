//global
let express = require('express');
let mong = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
let verifyToken = require('./middleware/verifyToken');
app.use('/', function ( req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, DELETE");    
    next();
});
let loginRoute = require('./login/loginRoute');
app.use('/api',loginRoute);
let pesertaRoute = require('./peserta/pesertaRoute');
app.use('/api',pesertaRoute);
let angkatanRencanaRoute = require('./angkatanRencana/angkatanRencanaRoute');
app.use('/api',angkatanRencanaRoute);
let angkatanAktualRoute = require('./angkatanAktual/angkatanAktualRoute');
app.use('/api',angkatanAktualRoute);
mong.connect('mongodb://doni:h4g4t4doniozan@ds113835.mlab.com:13835/dbpelatihan');
app.listen(process.env.PORT || 8889, function() {
  console.log('Node app is running on port', app.get('port'));
});
