const { Model } = require("sequelize");
const db = require('./index')
const UserBook = require('./UserBook.Model')
module.exports = (sequelize, Sequelize) => {
    
    const User = sequelize.define("User", {
        id: {
            allowNull: false,
            autoIncrement: true,
            field: 'user_id',
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
            required: true,
        },
        email: {
            type: Sequelize.STRING,
            required: true,
        },
        role: {
            type: Sequelize.ENUM("admin", "customer")
            
        },
        password: {
            type: Sequelize.STRING,
            required: true,
        },
    });
    return User;
};