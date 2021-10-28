const HttpError = require('../models/http-error');
const FieldData = require('../models/field-data');

//## Get all fields data
const getAllFieldsData = async (req, res, next) => {
	let fieldsData;
	//Get all fields data from DB
	try{
		fieldsData = await FieldData.find();
	} catch(err){
		console.log(err);
		return next(
			new HttpError('Something went wrong, could not get any fields data.')
		);
	}
	//Response
	res
		.status(200)
		.json(fieldsData);
}

//## Create new fields data
const createFieldsData = async (req, res, next) => {
	const { data } = req.body;
	if(!data || data === ""){
		return next(
			new HttpError('Data is required.', 422)
		);
	}
	//Create field data object with data passed in request body
	const createdFieldData = new FieldData({
		data
	});
	//Add field data to database
	try {
		await createdFieldData.save();
	} catch (err){
		return next(
			new HttpError('Creating field data failed, please try again.', 500)
			);
	}
	//Response
	res
		.status(201)
		.json({createdFieldData});
}

//##Exports
exports.getAllFieldsData = getAllFieldsData;
exports.createFieldsData = createFieldsData;