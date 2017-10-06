// Import from the module './whiteboard':
//   The default export, naming it draw,
//   An export named `events`, calling it `whiteboard`.
import whiteboard, {draw} from './whiteboard'
const socket = io(window.location.origin)



// Example of listening to draw events:
//   (This logging will probably get really annoying):
whiteboard.on('draw', function(data) {
    socket.emit('something', data)
})
socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!')
})

socket.on('someoneDrew', function(data) {
    console.log('someone drew something')
    // draw(data);
})

// Example: Draw a single stroke.
draw([0, 0], [250, 250], 'black', true)
