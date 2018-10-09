process.stdin.once("data", function(data) {
    console.log("Nice to meet you " + data);
    process.stdin.pause();
});
process.stdin.setEncoding("utf8");
console.log("What is your name :");
process.stdin.resume();

