var events = require("events");
var emitter = new events.EventEmitter();
emitter.once("escKey", function() {
    console.log("Exit the app");
});
emitter.emit("escKey");
emitter.emit("escKey");
