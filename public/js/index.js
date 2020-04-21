const socket = io();

socket.on('connect', () => {
  console.log("I'm connected");
});

socket.on('matchmaking', (data) => {
  document.getElementById("players").innerText =
  `componenet = ${data.component}\nyou = ${socket.id}`;
});
