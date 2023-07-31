const db = require("../Models");
// models path depends on your structure
const Users = db.users;
const UserBooks = db.userbooks
const Books = db.books
// const { userbooks, books } = db
var Sequelize = require('sequelize')



async function createUser(userData) {
    return Users.create(userData)
}
async function getUserIfExist(email) {
    return Users.findOne({
        where: {
            email: email
        }
    })
}

async function getUserWithBooks(user_id) {
    return Users.findAll({
        where: {
            user_id
        },
        include: [{ model: UserBooks, include: [{ model: Books }] }]
    })
}

async function getUsersIssuedBook() {
    return Users.findAll({
        attributes: ['user_id', 'name', 'email'],
        include: [{ model: db.userbooks, distinct: 'user_id',attributes: [], where: { is_retured: false } }],
    })
}
async function assignBook(userAndBookData){
    userAndBookData.is_retured = false
    return UserBooks.create(userAndBookData)
}

module.exports = {
    createUser, getUserWithBooks, getUserIfExist, getUsersIssuedBook, assignBook
}