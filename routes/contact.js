const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const { check, validationResult } = require('express-validator');

// const User = require('../../models/User');

// @route     GET api/contacts
// @desc      Get all user contacts
// @access    Private

router.get('/', (req, res) =>{
    res.send('Get all contacts');
});

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private

router.post('/', (req, res) =>{
    res.send('Add new contact');
});

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private

router.put('/:id', (req, res) =>{
    res.send('Update Contact');
});

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private

router.delete('/:id', (req, res) =>{
    res.send('Delete contacts');
});

module.exports = router;