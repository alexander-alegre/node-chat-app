const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express(); 
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: '',
        text: '',
        createdAt: new Date()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message); 
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


// app.get('/', (req, res) => {
//     res.render('index');
// });


server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});