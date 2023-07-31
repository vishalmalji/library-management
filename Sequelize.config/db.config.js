module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "zcon@123",
    DB: "library_management_system",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};