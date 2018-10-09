var commander = require("commander");
commander
.option("-h, --height <i>", "Height of the triangle", parseInt, 0)
.option("-b, --base [j]", "Base length of the triangle", parseInt, 0)
.option("-r, --right", "Boolean argument right")
.parse(process.argv);
console.log(commander.height);
console.log(commander.base);
console.log(commander.right);
