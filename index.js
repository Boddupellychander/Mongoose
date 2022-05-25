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
	res.render('deficit.pug');
	
});

app.post('/deficit', (req, res) => {
    var dificit = new Deficit();
    dificit.country = req.body.country;
    dificit.expimp = req.body.expimp;
	console.log(dificit.expimp);
    dificit.volume = req.body.volume;
    dificit.save((err, docs) => {
        if(!err) { res.send("Record Insert Sucessful"); }
        else{
            res.send("Record Inserted Failed");
        }
	});
    });

app.listen(5000);