var events = require("events");
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();
emitter.on("newConnection", function() {});
emitter.on("newConnection", function() {});
emitter.on("newConnection", function() {});
console.log(EventEmitter.listenerCount(emitter, "newConnection"));
