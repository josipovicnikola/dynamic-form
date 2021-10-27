const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fieldDataSchema = new Schema({
	data: { type: String, required: true}
})

module.exports = mongoose.model('FieldData', fieldDataSchema);