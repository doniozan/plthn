AngkatanRencana = require('./angkatanRencanaModel.js');

module.exports.getAngkatanRencana = function(callback,limit){
    AngkatanRencana.find(callback).limit(limit);
}

module.exports.getAngkatanRencanaById = function(_id,callback){
    AngkatanRencana.findById(_id,callback);
}

module.exports.createAngkatanRencana = function(prpns,callback){
    AngkatanRencana.create(prpns,callback);
}

module.exports.removeAngkatanRencana = function(_id,callback){
    AngkatanRencana.findByIdAndRemove(_id,callback);
}

module.exports.updateAngkatanRencanaById = function(_id,prpns,callback){
    AngkatanRencana.findByIdAndUpdate(_id,prpns,callback);
}