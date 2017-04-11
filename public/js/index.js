var socket = io();

socket.on('connect', function() {
    document.getElementById('connected').innerHTML = 'Connected to server';
});
socket.on('disconenct', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});



$('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message').val()
    }, function() {

    });
});