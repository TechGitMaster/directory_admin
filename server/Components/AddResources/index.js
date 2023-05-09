const express = require('express');
const router = express.Router();
const resource_column = require('../../databases/resources_column');
const resourceF = resource_column();

router.post('/uploadResources', async (req, res) => {
    const { file, title, member, year, yearFilter, course, enableComment } = req.body.IData;
    const { publicId, secureURI } = req.body;

    let date = new Date;
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    await new resourceF({
        title: title,
        member: member,
        year: year,
        yearFilter: yearFilter,
        course: course,
        documentURI: secureURI,
        documentID: publicId,
        enableComment: enableComment,
        dateUploaded: `${ month[date.getMonth()] } ${ date.getDate() }, ${ date.getFullYear() }`,
        selectedTop: 'new',
        deleteNot: 'new',
        titleFirstLetter: title[0].toUpperCase()
    }).save();

    res.json({response: 'success'});
});


module.exports = router;