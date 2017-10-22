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
let loginRoute = require('./perawat/loginRoute');
app.use('/api',loginRoute);
let pasienRoute = require('./pasien/pasienRoute');
app.use('/api',pasienRoute);
let userPasienRoute = require('./userPasien/userPasienRoute');
app.use('/api',userPasienRoute);
let satuanHargaDokterRoute = require('./satuanHargaDokter/satuanHargaDokterRoute');
app.use('/api',satuanHargaDokterRoute);
let perawatRoute = require('./perawat/perawatRoute');
app.use('/api',perawatRoute);
let userPetugasRoute = require('./userPetugas/userPetugasRoute');
app.use('/api',userPetugasRoute);
mong.connect('mongodb://doni:h4g4t4doniozan@ds113835.mlab.com:13835/dbpelatihan');
app.listen(process.env.PORT || 8889, function() {
  console.log('Node app is running on port', app.get('port'));
});
