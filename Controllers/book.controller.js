const express = require('express');
const router = express.Router();
const BookService = require("../Services/book.service")

async function createBook(req, res) {
    try {
        const result = await BookService.createBook(req.body)
        if (result) {
            res.status(201).send("Book created")
        }

    } catch (error) {
        res.status(500).send("Internal Server error")
    }
}

async function getBooks(req, res) {
    try {
        const result = await BookService.getAllBooks()
        if (result) {
            res.status(201).send(result)
        }

    } catch (error) {
        res.status(500).send("Internal Server error")
    }
}

module.exports = { createBook, getBooks }