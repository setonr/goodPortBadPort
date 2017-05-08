var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
	response.end("It works! Path hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
	console.log("You have great potential, smell nice, and are a hard worker!");
});

server.listen(PORT2, function() {
	console.log("You are a lazy, good-for-nothing jerk.");
})