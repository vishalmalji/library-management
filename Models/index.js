const dbConfig = require("../Sequelize.config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operationsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User.Model")(sequelize, Sequelize);
db.books = require("./Book.Model")(sequelize, Sequelize);
db.userbooks = require("./UserBook.Model")(sequelize, Sequelize);


// associations
db.users.hasMany(db.userbooks, { foreignKey: "user_id" })
db.books.hasMany(db.userbooks, { foreignKey: 'book_id' })
db.userbooks.belongsTo(db.books, { foreignKey: "book_id" })
db.userbooks.belongsTo(db.users, {foreignKey: "user_id"})


module.exports = db;
