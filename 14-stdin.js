process.stdin.once("data", function(data) {
	var user_name = data.toString();
	console.log("Nice to meet you " + user_name);
	process.stdin.pause();
});
console.log("What is your name: ");
process.stdin.resume();
