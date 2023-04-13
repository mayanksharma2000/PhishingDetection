const express = require('express');

const router = express.Router();

const phishingDetectorController = require('../controllers/phishingDetection');

router.post('/', phishingDetectorController.checkUrl);

module.exports = router;


