var mongoose = require('mongoose');
var express =require('express');
var app=express();
var bodyParser =require('body-parser');
app.set('view engine','pug');
app.set('views', './views');

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/zensar');


var deficitSchema =mongoose.Schema( {
	account: String,
	code: String,
	country_code: String,
	product_type: String,
	time_ref: String,
	"Status": String
}, {collection: "gsquarterlySeptember20"});
app.use(bodyParser.urlencoded({ extended: false }));


var Deficit = mongoose.model("gsquarterlySeptember20",deficitSchema);

app.get('/deficit', function(req,res){
	Deficit.find(function(err,response){
		console.log(response);
		res.json(response);
	
	});
	
});


app.listen(5000);