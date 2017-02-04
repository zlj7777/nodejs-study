const EventEmitter = require('events');

class ZljEmitter extends EventEmitter {}

const zljEmitter = new ZljEmitter();
zljEmitter.on('event', () => {
	console.log('wow, an event occured !!!');
});
zljEmitter.emit('event');