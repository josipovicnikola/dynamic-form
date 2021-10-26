const HttpError = require('../models/http-error');
const Field = require('../models/field');

//<<< Get all fields >>>
const getAllFields = async (req, res, next) => {
	//Get all fields from database
	let fields;
	try {
		fields = await Field.find();
	} catch(err) {
		return next(
			new HttpError('Something went wrong, could not get any fields.', 500)
		);
	}
	//Response
	res
		.status(200)
		.json(fields);
};

//<<< Get field >>>
const getFieldById = async (req, res, next) => { 
	const fieldId = req.params.fid;

	let field;
	try {
		field = await Field.findById(fieldId);
	} catch(err){
		return next(
				new HttpError('Something went wrong, could not find a field', 500)
			);
	}

	if(!field){
		return next(
			new HttpError('Could not find a field for the provided id.', 404)
		);
	}
	//Response
	res
		.status(200)
		.json({field});
};


// <<< Update field value >>>
const patchFieldValue = async (req, res, next) => {
	const fieldId = req.params.fid;
	const { value } = req.body;

	//Value validation
	if(!value || value === ""){
		return next(
			new HttpError('Value is required.', 422)
		);
	}

	let updatedField;
	try {
		//Get old field from DB by id
		updatedField = await Field.findById(fieldId);
		//Check if field with that id exists
		if(!updatedField){
			return next(
				new HttpError('Could not find a field for the provided id.', 404)
			);
		}
		//Update field value and save to DB
		updatedField.value = value;
		await updatedField.save();
	} catch(err) {
		return next(
				new HttpError('Something went wrong, could not update a field value.', 500)
		);
	}

	res
	.status(200)
	.json({updatedField});
};

// <<< Update field >>>
const patchFieldById = async (req, res, next) => {
	const fieldId = req.params.fid;
	const { label, type, options } = req.body;

	//Label and type validation
	if(!label || label === "" || !type || type === ""){
		return next(
			new HttpError('Label and type are required.', 422)
		);
	}

	let updatedField;
	try {
		//Get old field from DB by id
		updatedField = await Field.findById(fieldId);
		//Check if field with that id exists
		if(!updatedField){
			return next(
				new HttpError('Could not find a field for the provided id.', 404)
			);
		}
		//Update field and save to DB
		updatedField.label = label;
		updatedField.type = type;
		updatedField.options = options || [];
		updatedField.value = "";
		await updatedField.save();
	} catch(err) {
		return next(
				new HttpError('Something went wrong, could not update a field.', 500)
		);
	}
	res
	.status(200)
	.json({updatedField});
};

//<<< Create field >>>
const createField = async (req, res, next) => {
	const { label, type, options, value } = req.body;
	//Field validation
	if(!label || label === "" || !type || type === "" ){
		return next(
			new HttpError('Label and type are required.', 422)
		);
	}
	//Create field object with data passed in request body
	const createdField = new Field({
		label,
		type,
		options,
		value
	});
	//Add field to database
	try {
		await createdField.save();
	} catch (err){
		return next(
			new HttpError('Creating field failed, please try again.', 500)
			);
	}
	//Response
	res
		.status(201)
		.json({createdField});
};

//<<< Delete field >>>
const deleteFieldById = async (req, res, next) => {
	const fieldId = req.params.fid;
	
	//Delete field from database
	let deletedField;
	try {
		deletedField = await Field.findById(fieldId);
		console.log(deletedField);
		if(!deletedField){
			return next(
				new HttpError('Could not find a field for the provided id.', 404)
			);
		}
		await deletedField.remove();
	} catch (err){
		return next(
			new HttpError('Deleting field failed, please try again.', 500)
			);
	}
	//Response
	res
		.status(200)
		.json({message: "Field successfuly deleted."});
};

//<<< Exports >>>
exports.getAllFields = getAllFields;
exports.getFieldById = getFieldById;
exports.patchFieldValue = patchFieldValue;
exports.patchFieldById = patchFieldById;
exports.createField = createField;
exports.deleteFieldById = deleteFieldById;
