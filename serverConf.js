const {onServer} = require("./server.js");
const path       = require("path");
const express    = require("express");
const http       = require("http");
const socketIO   = require("socket.io");
const shell      = require("shelljs");

const port   = process.env.PORT || 1338;
const check  = shell.exec(`lsof -i:${port}`);
const public = path.join(__dirname, "/public");
const app    = express();
const server = http.createServer(app);
const io     = socketIO(server);

if(check == "")
{
  app.use(express.static(public));
  try
  {
    server.listen(port, () => {
      console.log(`Listenning on port ${port}`);
    });
    onServer(io);
  }
  catch (e)
  {
    return;
  }
  module.exports = () => {
    strapi.io = io;
    strapi.ioEnabled = true;
  }
}
