const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fieldSchema = new Schema({
	label: { type: String, required: true},
	type: { type: String, required: true},
	options: { type: Array, required: false},
	value: {type: String, required: false}
})

module.exports = mongoose.model('Field', fieldSchema);