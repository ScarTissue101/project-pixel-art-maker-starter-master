// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//var = row, column, color;
	
//	color = $("#colorPicker").val();
		
//input for the grid

$(document).ready(function(){
	
	$("#sizePicker").submit(function(event) {
		/*"use strict";*/
		event.preventDefault();
		
		var row = $("#inputHeight").val();
		var column = $("inputWidth").val();
		
		
		//$("#pixelCanvas").empty();
		makeGrid(row, column);
	});
});
	
//draw the grid
function makeGrid(row, column) {
	
for (var i = 1; i <= row; i++) {
		$("#pixelCanvas").append("<tr></tr>");
	for (var j = 1; j <= column; j++) {
			$("tr").last.append("<td></td>");
		}
	}
}

//add color to grid squares on mouseover
var color = $("#colorPicker").val();
$("#pixelCanvas").on("click", "td", function() {
	$(this).css(background-color, color);
});
