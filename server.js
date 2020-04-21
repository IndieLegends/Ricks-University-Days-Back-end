let playersList = [];
let io;

function onServer(ioSocket) {
  io = ioSocket;
  console.log("\n****************************\nSocket server is up on port 1338\n****************************\n");
  io.on('connection', (socket) => {
    console.log('client ' + socket.id + " connected.");
    playersList.push(socket.id);
    matchmaking(socket);
  });
}

function matchmaking(socket) {
  for (var i = 0; i < playersList.length; i++) {
    if(playersList[i] != socket.id) {
      socket.emit("matchmaking", {
        "component": playersList[i]
      });
      io.to(playersList[i]).emit("matchmaking", {
        "component": socket.id
      });
      playersList.splice(i, 1);
      for (let j = 0; j < playersList.length; j++) {
        if(playersList[i] == socket.id) {
          playersList.splice(j, 1);
        }
      }
    }
  }
}

module.exports = { onServer }
