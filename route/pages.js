const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/education', (req, res) => {
    res.render('education')
})

router.get('/experience', (req, res) => {
    res.render('experience')
})

router.get('/socials', (req, res) => {
    res.render('socials')
})

router.get('/location', (req, res) => {
    res.render('location')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment
    })

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })

    .catch(err => console.log(err));

})

module.exports = router;