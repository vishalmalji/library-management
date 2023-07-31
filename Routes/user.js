const express = require('express');
const { createUser, getUserWithBooks, loginUser, getUserListIssuedBook, issueBook } = require('../Controllers/user.controller');
const { userAuth } = require('../middlware/verifyToken');
const { CONSTANTS } = require('../helpers/constants');


const router = express.Router();

router.post('/createUser', createUser)
router.post('/login', loginUser)
router.get('/getUserBooks/:user_id', userAuth(), getUserWithBooks)
router.get('/getUserIssuedBook', userAuth(CONSTANTS.ROLE.ADMIN), getUserListIssuedBook)
router.post('/issueBook', userAuth(CONSTANTS.ROLE.CUSTOMER), issueBook)

module.exports = router
