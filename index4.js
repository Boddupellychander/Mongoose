var mongoose = require('mongoose');
var express =require('express');
var app=express();
var bodyParser =require('body-parser');
app.set('view engine','pug');
app.set('views', './views');

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/zensar');


var deficitSchema =mongoose.Schema( {
	country: String,
	expimp: String,
	volume : String
});
app.use(bodyParser.urlencoded({ extended: false }));


var Deficit = mongoose.model("Deficit",deficitSchema);

app.get('/deficit', function(req,res){
	Deficit.update({country: "India"},{expimp: "Import"}, function(err,response){
	res.json(response);
	});
	
});


app.listen(5000);