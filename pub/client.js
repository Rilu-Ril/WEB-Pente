var socket = io();
var myUsername;

var table_len = 19;

function doThisWhenLoaded() {
	//if(myUserName == null)
//	{
		$("#loginDiv").show();
		$("#mainDiv").hide();
		$("#waitDiv").hide();
//	}
	
	$("#loginButton").click(function() {
		myUsername = $("#username").val();
		socket.emit("login", myUsername);
	});
	
	socket.on("wait", function(msg) {
		$("#waitText").text(msg);
		$("#loginDiv").hide();
		$("#mainDiv").hide();
		$("#waitDiv").show();
	});
	
	socket.on("start", function(users) {
		$("#loginDiv").hide();
		$("#waitDiv").hide();
		$("#mainDiv").show();
		$("#player1name").text(users[0]);
		$("#player2name").text(users[0]);
	});
	/*
	$(a sell was clicket get position).click(function() {
		io.emit("placePiece", {row: , col: });
	});
	socket.on("getTable", function(table) {
		reDrawTable(table);
	});
	socket.on("win", function(player))
	{
		if(player == myUserName)
		{
			"you wiiin";
		}
		else
		{
			"you loose";
		}
		
	}
	*/
}

$(doThisWhenLoaded);

// function reDrawTable() {
	// //TODO
// }