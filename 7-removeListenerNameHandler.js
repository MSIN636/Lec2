var events = require("events");
var emitter = new events.EventEmitter();
function connection_handler(){
	console.log("new connection");
	
}
emitter.on("newConnection", connection_handler);
emitter.removeListener("newConnection", connection_handler);
emitter.emit("newConnection");
