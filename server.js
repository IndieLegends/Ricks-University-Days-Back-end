const path     = require("path");
const express  = require("express");
const http     = require("http");
const socketIO = require("socket.io");
const shell    = require("shelljs");

const port   = process.env.PORT || 1338;
const check  = shell.exec(`lsof -i:${port}`);
const public = path.join(__dirname, "/public");
const app    = express();
const server = http.createServer(app);
const io     = socketIO(server);

if(check == "")
{
  app.use(express.static(public));

  io.on("connect", (socket) => {
    console.log("Connection Successful");
  });
  try
  {
    server.listen(port, () => {
      console.log(`Working on port ${port}`);
    });
  }
  catch (e)
  {
    return;
  }

  console.log("out of socket");
  function somefunc(){
    console.log("some other function");
  }
  module.exports = () => {
    strapi.io = io;
  }
}
