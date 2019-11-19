const express = require('express');
const path = require('path');
const cars = require('./data/car-db');


const app = express();

//mount routes or define the path for the route 
app.get('/home', function(req, res) {
	res.render('home');
});
app.get('/cars', function(req, res) {
	res.render('cars/index', {
		cars: cars.getAll()
	})
})
app.get('/', function(req, res) {
	res.redirect('/home');
});

app.get('/cars:id', function(req, res) {
	console.log(`The value for the :id route parameter is: ${req.params.id}`);
	res.render('cars/show', {cars: make.getOne(req.params.id)});
})

//app.set method is used to configure an Express app's settings
app.set('view engine', 'ejs');
//need to tell Express where all of our views can be found 
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, function() {
	console.log('Listening on port 3000');
});

