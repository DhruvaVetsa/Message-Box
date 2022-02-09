var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.post("/submit-form", (req, res) => {
    var heckingData = `First Name : ${req.body.enterFirstName}
Middle Name : ${req.body.enterMiddleName}
Last Name : ${req.body.enterLastName}
Age : ${req.body.myAge}
DOB : ${req.body.myDOB}
Day when Born : ${req.body.dayYouWereBorn}
Gender : ${req.body.genderSelect}`;
    fs.writeFile(path.join(__dirname, "../virus.txt"), heckingData, (err) => {
        if (err) {
            console.log(err);
            alert("Error!!");
        }
        res.render(`submitted`);
    })
})

module.exports = router;