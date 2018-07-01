// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	// select the grid dimensions
	var canv = $('#pixelCanvas');
	var width = $('#inputWeight').val();
	var height = $('#inputHeight').val();
	
	$('table tr').remove();
	
	for (x = 0; x < height; x++) {
		$('table').append('<tr></tr>');
	}
	
	for (y = 0; y < width; y++) {
		$('tr').append('<td></td>');
	} 
	
	
	// clicking on a square in the grid changes the color of the square
	$(canv.find('td')).click(function() {
		// Select color input
		var color;
		color = $("#colorPicker").val();
		$(this).css('background-color', color);
	});
	
};

// function that calls makeGrid() when size is submitted
$('input[type="submit"]').click(function(event) {
	event.preventDefault();
	makeGrid();
});

