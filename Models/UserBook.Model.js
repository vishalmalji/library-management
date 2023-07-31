const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const UserBook = sequelize.define('UserBook', {
        id: {
            allowNull: false,
            autoIncrement: true,
            field: 'user_book_id',
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'user_id',
                as: 'user_id',
            },
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Books',
                key: 'book_id',
                as: 'book_id',
            },
        },
        borrow_Date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        is_retured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        
    });

    return UserBook;
};