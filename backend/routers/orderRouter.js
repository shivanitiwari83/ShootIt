const express = require('express');
const router = express.Router();
const Model = require('../models/orderModel')

router.post('/add', (req, res) => {
    console.log(req.body);
    // res.send('response from user Router');
    //Add Operation 
    new Model(req.body).save() //promise 
        .then((result) => {
            console.log(result);
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
})

router.get('/getbyuser/:id', (req, res) => {
    Model.find({user : req.params.id}).populate('user').populate('equipment')
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
            // res.json(err);
        });
})

router.put('/update/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
            // res.json(err);
        });
})

router.post('/authenticate', (req, res) => {

    const formdata = req.body;

    Model.findOne({ email: formdata.email, password: formdata.password })
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(401).json({ status: 'login failed' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})


// exporting
module.exports = router;

