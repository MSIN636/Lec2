var i = 0;
var interval_Id = setInterval(function() {
	console.log(i);
	i++;
}, 2000);

setTimeout(function(id){
   clearInterval(interval_Id);
}, 24000, interval_Id);
