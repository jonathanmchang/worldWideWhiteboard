// Import from the module './whiteboard':
//   The default export, naming it draw,
//   An export named `events`, calling it `whiteboard`.
import whiteboard, {draw} from './whiteboard'
const socket = io(window.location.origin)



// Example of listening to draw events:
//   (This logging will probably get really annoying):
whiteboard.on('draw', function(start, end, color) {
    socket.emit('something', start, end, color)
})
socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!')
})

socket.on('someoneDrew', function(start, end, color) {
    console.log('someone drew something')
    draw(start, end, color);
})

// Example: Draw a single stroke.
draw([0, 0], [250, 250], 'black', true)
