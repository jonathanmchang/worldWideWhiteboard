const path = require('path');
const express = require('express');
const app = express();
const socketio = require('socket.io');


// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
const server = app.listen(1337, function () {
    console.log(`Listening on http://localhost:${server.address().port}`);
});

const io = socketio(server)


io.on('connection', function(socket) {
    console.log('A new client has connected!');
    console.log(socket.id)
    socket.on('disconnect', function() { 
        console.log('disconnected')
    })
    socket.on('something', function(start, end, color) {
        console.log('i got something')
        socket.broadcast.emit('someoneDrew', start, end, color)
    })
})


// The webpack dev middleware builds and serves our bundle
// directly from memory. This has the advantage of never serving
// a partial bundle (if, for example, you reload in the middle of
// a compilation).
app.use(require('./webpack-middleware'))

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});