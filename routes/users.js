const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const { check, validationResult } = require('express-validator');

// const User = require('../../models/User');

// @route     POST api/users
// @desc      Register User
// @access    Public

router.post('/', (req, res) =>{
    res.send('Register a user');
});

module.exports = router;