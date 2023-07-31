const express = require('express');
const router = express.Router();
const UserService = require("../Services/user.service")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { SECRET_APP_STRING } = require('../config');

async function createUser(req, res) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 12)
        const result = await UserService.createUser(req.body)


        if (result) {
            res.status(201).send("User created")
        }

    } catch (error) {
        res.status(500).send("Internal Server error")
    }
}

async function loginUser(req, res) {
    try {
        // req.body.password = await bcrypt.hash(req.body.password, 12)
        let { email, password } = req.body;
        const user = await UserService.getUserIfExist(email)
        if (!user) {
            return res.status(404).send("User not found")

        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(404).send("Incorrect Password")
            return
        }

        let token = jwt.sign(
            {
                role: user.role,
                name: user.name,
                email: user.email,
            },
            SECRET_APP_STRING,
            { expiresIn: "3 days" }
        );
        let result = {
            name: user.name,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168,
        };

        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server error")
    }
}



async function getUserWithBooks(req, res) {
    try {
        const userData = await UserService.getUserWithBooks(req.params.user_id)
        res.send(userData)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server error")
    }
}

async function getUserListIssuedBook(req, res) {
    try {
        const userData = await UserService.getUsersIssuedBook()
        res.send(userData)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server error")
    }
}

async function issueBook(req, res) {
    try {
        const result = await UserService.assignBook(req.body)
        if(result){
            res.send("Successfully issued book")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server error")
    }
}

module.exports = { createUser, getUserWithBooks, loginUser, getUserListIssuedBook, issueBook }