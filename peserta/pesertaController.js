Peserta = require('./pesertaModel.js');

module.exports.getPeserta = function(callback,limit){
    Peserta.find(callback).limit(limit);
}

module.exports.getPesertaById = function(_id,callback){
    Peserta.findById(_id,callback);
}

module.exports.createPeserta = function(prpns,callback){
    Peserta.create(prpns,callback);
}

module.exports.removePeserta = function(_id,callback){
    Peserta.findByIdAndRemove(_id,callback);
}

module.exports.updatePesertaById = function(_id,prpns,callback){
    Peserta.findByIdAndUpdate(_id,prpns,callback);
}