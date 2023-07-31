const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('Book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      field: 'book_id',
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // Add more properties as needed for your Book schema
  });
  return Book;
};