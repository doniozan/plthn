AngkatanAktual = require('./angkatanAktualModel.js');

module.exports.getAngkatanAktual = function(callback,limit){
    AngkatanAktual.find(callback).limit(limit);
}

module.exports.getAngkatanAktualById = function(_id,callback){
    AngkatanAktual.findById(_id,callback);
}

module.exports.createAngkatanAktual = function(prpns,callback){
    AngkatanAktual.create(prpns,callback);
}

module.exports.removeAngkatanAktual = function(_id,callback){
    AngkatanAktual.findByIdAndRemove(_id,callback);
}

module.exports.updateAngkatanAktualById = function(_id,prpns,callback){
    AngkatanAktual.findByIdAndUpdate(_id,prpns,callback);
}