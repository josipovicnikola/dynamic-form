const express = require('express');
const fieldsController = require('../controllers/fields-controller');
const fieldsDataController = require('../controllers/fields-data-controller');

const router = express.Router();

//Retrieve all fields from DB
router.get('/', fieldsController.getAllFields);
router.post('/', fieldsController.createField);
router.get('/id/:fid', fieldsController.getFieldById);
router.patch('/:fid', fieldsController.patchFieldById);
router.delete('/:fid', fieldsController.deleteFieldById);
router.get('/data', fieldsDataController.getAllFieldsData);
router.post('/data', fieldsDataController.createFieldsData);

module.exports = router;