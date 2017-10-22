let mong = require('mongoose');
let angkatanaktual = mong.Schema({
    KdAngkatan:String,
    NamaAngkatan:String,
    TglMulai:String,
	TglSelesai:String,
	TglT1:String,
	TglT2:String,
	TglMeniProject:String,
	JmlPeserta:String,
	KdPegawai:String
});
let AngkatanAktual = module.exports =  mong.model("AngkatanAktual",angkatanaktual,"AngkatanAktual");