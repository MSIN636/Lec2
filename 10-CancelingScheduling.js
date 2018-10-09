var timer_Id = setTimeout(function() {
    console.log("This function will be executed in 2 sec.");
}, 2000);
setTimeout(function(id){
	clearTimeout(id);
	console.log(" Scheduled Function been canceled after 1sec.\n");
	console.log(timer_Id);
}, 1000, timer_Id);
