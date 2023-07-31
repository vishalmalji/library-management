const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./Models");
db.sequelize.sync({ force: false })


var corsOptions = {
    origin: "http://localhost:8080/"
};
app.use(cors(corsOptions));



app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json({ message: "Welcome to Turing.com" });
});
app.use('/users', require('./Routes/user'));
app.use('/books', require('./Routes/book'));
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port $(PORT).");
});