const cp = require("cookie-parser");
const cs = require('cookie-session')
const bp = require("body-parser");
const csurf = require("csurf");
const { secret } = require('./../config/secrets');

module.exports = (express, app) => {

    app.use(cp());

    app.use(
        cs({
            secret,
            maxAge: 24 * 60 * 60 * 1000
        })
    );

    app.use(bp.json());

    app.use(csurf());
    app.use((req, res, next) => {
        res.cookie("myToken", req.csrfToken());
        next();
    });

    app.use((req, res, next) => {
        console.log("req.session", req.session);
        next();
    });

    app.use(express.static('./client/public'));

}
