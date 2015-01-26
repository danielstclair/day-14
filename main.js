$(document).ready(onReady);

function onReady() {
	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		// 1. Input value
		console.log($('#search-box').val());
		$('#results').html($('#search-box').val());
		$('#results').html($('#search-box').val())
	}

	
