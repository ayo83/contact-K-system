const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const { check, validationResult } = require('express-validator');

// const User = require('../../models/User');

// @route     GET api/auth
// @desc      Get logged in User
// @access    Private

router.get('/', (req, res) =>{
    res.send('Get logged in user');
});


// @route     POST api/auth
// @desc      Auth User and get token
// @access    Public

router.post('/', (req, res) =>{
    res.send('Login User');
});

module.exports = router;