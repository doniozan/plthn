let mong = require('mongoose');
let angkatanrencana = mong.Schema({
    KdAngkatan:String,
    NamaAngkatan:String,
    TglMulai:String,
	TglSelesai:String,
	TglT1:String,
	TglT2:String,
	TglMeniProject:String,
	TargetPeserta:String,
	KdPegawai:String
});
let AngkatanRencana = module.exports =  mong.model("AngkatanRencana",angkatanrencana,"AngkatanRencana");