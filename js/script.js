const socket = io('ws://localhost:3002');

const local = new Local(socket);

const remote = new Remote(socket);

socket.on('waiting', function (str) {
    document.getElementById('waiting').innerHTML = str;
})