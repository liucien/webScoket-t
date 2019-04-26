var socket = io('ws://localhost:3002');

var local = new Local(socket);

var remote = new Remote(socket);

socket.on('waiting', function (str) {
    document.getElementById('waiting').innerHTML = str;
})