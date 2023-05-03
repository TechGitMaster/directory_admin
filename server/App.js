const express = require('express');
const router = express.Router();

//All Import_______________________________________________
const Auth = require('./Components/Authentication');
const AddRsources = require('./Components/AddResources');

router.use('/', Auth);
router.use('/', AddRsources);

module.exports = router;