let mong = require('mongoose');
let login = mong.Schema({
    Username:String,
    Password:String
});
let Login = module.exports = mong.model("Login",login,"Login");
