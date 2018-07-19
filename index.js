const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const mongoose = require('mongoose');
require('./helper/mosca')
const CertificateModel = require('./models/Certificate.model')

const { emitControlCommand } = require('./helper/mqtt');

const url = "mongodb://anlancan96:anlancandz96@ds035046.mlab.com:35046/xephangtudong"
mongoose.connect('mongodb://localhost:27017/Xephangtudong', (err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connect DB success !');
    }
});

server.use(compression());
server.use(bodyParser.json({ extend: true }));
server.use(bodyParser.urlencoded({ extend: true }));
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/views'));


server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");

    next();
});


server.get('/', function(req, res) {
    CertificateModel.getAllCertificate((err, docs) => {
        if(err) {
            return res.render('error');
        }  
        return res.render('index', {data: docs})
    })
});

server.post('/post', function(req, res) {
    emitControlCommand(req.body.deviceId, req.body.status, (err, success) => {
        (err) ? res.send(err) : res.send('ok');
    })
})

server.listen(3000, (err) => {
    if(err) {

        return console.log(err)
    }
    emitControlCommand('refresh page', '1', (err, success) => {
        (err) ? console.log(err) : console.log('success')
    })
    console.log('Server listening on', 3000)
})