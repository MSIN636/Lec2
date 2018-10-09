var commander = require("commander");
commander.password("credit card Number: ", "*", function(ccNum) {
	console.log("procced with that credit card  " + ccNum);
	process.stdin.pause();
});
