const express = require('express');
const login = express.Router();
const path = require('path');

//importing actions from controller
const userModelController = require('../controller/userModelController');

login.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../index.html'))
});

login.get('/index.css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../index.css'))
})

//should move the login post to here?

module.exports = login;