const axios = require("axios");

var instance = axios.create({
    xsrfCookieName: "myToken",
    xsrfHeaderName: "csrf-token"
});

export default instance;
