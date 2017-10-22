Login = require('./loginModel.js');

module.exports.getLogin = function(callback,limit){
    Login.find(callback).limit(limit);
}
module.exports.getLoginById = function(_id,callback){
    Login.findById(_id,callback);
}
module.exports.createLogin = function(tk,callback){
    Login.create(tk,callback);
}
module.exports.removeLogin = function(_id,callback){
    Login.findByIdAndRemove(_id,callback);
}
module.exports.updateLogin = function(_id,tk,callback){
    Login.findByIdAndUpdate(_id,tk,callback);
}
