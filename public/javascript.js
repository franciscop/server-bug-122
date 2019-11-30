// Connect to the server-side websockets. But there's no server yet!
var socket = io();

// The user count. Can change when someone joins/leaves
socket.on("count", function(data) {
  $(".user-count").html(data);
});

// When we receive a message
// it will be like { user: 'username', message: 'text' }
socket.on("message", function(data) {
  $(".chat").append(
    "<p><strong>" + data.user + "</strong>: " + data.message + "</p>"
  );
});
