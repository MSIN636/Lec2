var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("newConnection", function() {
	console.log("newConnection");
});

emitter.removeListener("newConnection", function() {
		console.log("newConnection");
});

emitter.emit("newConnection");
