var events = require("events");
var emitter = new events.EventEmitter();
var ip  = "19.10.20.0";
var Mac = "AA-00-04-00-XX-YY";
var password = "password";
emitter.on("newConnection", function(ip,Mac, Password) {
    console.log("connected : " + ip+" MAC: "+Mac+ " Access Granted");
});
emitter.emit("newConnection", ip,Mac,password);
