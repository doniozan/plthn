let mongoose = require('mongoose');

let database = {
	user : 'doni',
	pass : 'h4g4t4doni',
	url : 'ds121345.mlab.com',
	name : 'rumahsakit'
}

mongoose.connect('mongodb://'+database.user+':'+database.pass+'@'+database.url+'/'+database.name);
