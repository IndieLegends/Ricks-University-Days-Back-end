"use strict";

module.exports = () => {
    // import socket io
    var io = require("socket.io")(strapi.server);
    strapi.io = io;
};
