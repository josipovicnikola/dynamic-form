const express = require('express');
const formFieldsRoutes = require('./routes/form-routes');
const HttpError = require('./models/http-error');
const mongoose = require('mongoose');

const url='mongodb+srv://admin:josipovic96@mern.248oz.mongodb.net/mern?retryWrites=true&w=majority'

const app = express();

//Body parser
app.use(express.json());

//Allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/fields', formFieldsRoutes);

app.use((req, res, next) => {
	throw new HttpError('Could not find this route.', 404);
});

app.use((error, req, res, next) => {
	//If respond is sent, skip the error
	if(res.headerSent){
		return next(error);
	}

	res
		.status(error.code || 500)
		.json({message: error.message || 'An unknown error occured!'});
});

//Connect with DB cloud
mongoose
	.connect(url)
	.then(() => {
		//Port
		app.listen(5000);
	})
	.catch(err => {
		console.log(err);
	});