
var express = require("express");
var app = express();
var http = require("http");
var server = http.Server(app);
var socketio = require("socket.io");
var io = socketio(server);
app.use(express.static("pub"));

app.use(express.static("pub"));

var table;
var table_len = 19;
var allSockets = [];
var users = []; 
//var numberOFcaptured[] = {player1: , player2:};
var tempcapturedPieces;
io.on("Connection", function(socket) {
	console.log("Somebody connected to our socket.io server :)");
	
	socket.on("disconnect", function() {
		console.log("disconnect :("); 
		var indexOfUser = allSockets.indexOf(socket);
		allSockets.splice(indexOfUser, 1); 
		users.splice(indexOfUser, 1); 
		io.emit("wait", "Please wait for anither player");
	});
	
	socket.on("login", function(username) {
		console.log(username + " is added");
		if(users.length < 2)
		{
			allSockets.push(socket);
			users.push(username);
			console.log("number of users = " + users.length);
			if(users.length == 1)
			{
				io.emit("wait", "Please wait for another player");
			}
			else 
			{
				io.emit("start", users);
			}
		}
	});
	/*
	socket.on("placePiece", function(row, col) {
		placePiece(row, col);
		io.emit("getTable", table);
		if(checkIfwin())
		{
			io.emit("win", player);
		}
	});
	*/
	
});


/*
function placePiece(row, col){
	//TODO;
	table[row][col] == 'x'; // find out which player
	checkIfCaptured(row,col)
}
function checkIfCaptured(row,col) {
	//TODO: if captured change table.
	
}
function checkIfwin() {
	//1) 5 in a row
	//2) 10 pieces captured in total
}


function createNewTable()
{
	var r; var c;
	table = new Array(table_len);
	for(r = 0; r < table_len; ++r)
	{
		table[r] = new Array(table_len);
		for(c = 0; c < table_len; ++c)
		{
			table[r][c] = '.';
		}
	}
}
*/

app.listen(8028);

console.log("Server is running on port 8028");

