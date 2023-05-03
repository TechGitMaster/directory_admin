const express = require('express');
const router = express.Router();
const resource_column = require('../../databases/resources_column');
const resourceF = resource_column();

router.post('/uploadResources', async (req, res) => {
    await new resourceF({
        title: 'Hello',
        member: '04',
        year: '2021-2022',
        course: 'BSIT',
        documentURI: 'asdsad',
        enableComment: 'true',
        dateUploaded: 'Hello',
        deleteNot: 'new'
    }).save();
    res.json({hello: 'hello'});
});


module.exports = router;