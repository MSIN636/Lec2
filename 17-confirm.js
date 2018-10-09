var commander = require("commander");
commander.confirm("Confirm payment? ", function(proceed) {
	console.log("continue with payment status : " + proceed);
	process.stdin.pause();
});
