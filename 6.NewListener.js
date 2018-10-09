var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("newListener", function(eventName, listener) {
	console.log("New listening to " + eventName + " events");
});
emitter.on("newConnection", function() {});
