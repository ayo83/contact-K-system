const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Register User
// @access    Public

router.post('/', [
    check('name', 'Please enter name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'password must be at least 6 character long').isLength({ min: 6 }).matches(/\d/).withMessage('must contain a number')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // let error = errors.array();
        // let extractError = error.map((err) => { return err.msg });
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
        // see if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' } );
        }

        // Creating new  User Instants
        user = new User({
            name,
            email,
            password
        });

        //Encrypts password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Return jsonwebtoken 
        const payload = {
            user: {
                id: user.id,

            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;