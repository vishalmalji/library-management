const express = require('express');
const { createBook, getBooks } = require('../Controllers/book.controller');
const { userAuth } = require('../middlware/verifyToken');
const router = express.Router();

router.post('/createBook', createBook)
router.get('/getBooks', userAuth(), getBooks)

module.exports = router
