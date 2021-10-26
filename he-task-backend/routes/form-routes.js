const express = require('express');
const fieldsController = require('../controllers/fields-controller');

const router = express.Router();

//Retrieve all fields from DB
router.get('/', fieldsController.getAllFields);
router.post('/', fieldsController.createField);
router.get('/:fid', fieldsController.getFieldById);
router.patch('/:fid', fieldsController.patchFieldById);
router.delete('/:fid', fieldsController.deleteFieldById);

module.exports = router;