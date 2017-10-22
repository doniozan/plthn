let mong = require('mongoose');
let peserta = mong.Schema({
    KdPeserta:String,
    NamaPeserta:String,
    AlamatPeserta:String,
	KdProvinsi:String,
	KdKota:String,
	KdKec:String,
	TglLahir:String,
	KdStatusPeserta:String,
	Email:String,
	Blog:String
});
let Peserta = module.exports =  mong.model("Peserta",peserta,"Peserta");