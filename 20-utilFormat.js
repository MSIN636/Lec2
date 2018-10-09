var util = require("util");
var name = "John";
var age = 32;
console.log(util.format("Hi, my name is %s", name));
console.log(util.format("Hi, my name is %d", name));
console.log(util.format("Hi, my name is %j", name));
console.log(util.format("Hi, my name is %j", name, name));
console.log(util.format("I'm %s, and I'm %d years old", name, age));
console.log(util.format(name, age));
