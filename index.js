const server = require("server");
const { get, socket } = server.router;

server([
  socket("connect", ctx => {
    console.log("Connected!");
    console.log(ctx);
  })
]);
