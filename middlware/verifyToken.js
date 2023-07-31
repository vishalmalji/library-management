const jwt = require("jsonwebtoken");

const { SECRET_APP_STRING } = require("../config");

const userAuth = (role) => {

    return (req, res, next) => {


        const authHeader = req.headers["authorization"];
        console.log(SECRET_APP_STRING);
        if (!authHeader) return res.sendStatus(403);
        console.log(authHeader); // Bearer token

        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET_APP_STRING, (err, decoded) => {
            console.log("verifying");
            if (err) return res.sendStatus(403); //invalid token

            console.log(decoded); //for correct token
            if (role && role !== decoded.role) {
                return res.status(401).json("Sorry you do not have access to this route")
            }
            next();
        });
    }
};


module.exports = {
    userAuth
}