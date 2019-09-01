const cs = require('cookie-session');
const csurf = require("csurf");
const { secret } = require('./../secrets');

module.exports = (express, app) => {

    app.use(cs({ secret, maxAge: 24 * 60 * 60 * 1000 }));

    app.use(express.json());

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

    process.on('unhandledRejection', err => console.log('unhandledRejection: ', err));

};
