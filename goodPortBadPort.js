var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

var niceThings = ["You have great potential!", "You smell nice!", "You are a hard worker!", "You can do anything you set your mind to!", "You grab life by the horns!"];
var meanThings = ["You are a very lazy person.", "You are worthless.", "You can't do anything you set your mind to.", "People don't really like you.", "You smell bad."];

function handleRequest(request, response) {
	response.end("It works! Path hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
	var randomizeGood = (Math.floor(Math.random() * 4) + 0);
	console.log(niceThings[randomizeGood]);
});

server.listen(PORT2, function() {
	var randomizeBad = (Math.floor(Math.random() * 4) + 0);
	console.log(meanThings[randomizeBad]);
});