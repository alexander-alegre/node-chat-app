var socket = io();

socket.on('connect', function() {
    document.getElementById('connected').innerHTML = 'Connected to server';
});
socket.on('disconenct', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});