$(document).ready(onReady);

function onReady() {
	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		// 1. Input value
		console.log($('#search-box').val());
		$('#results').html($('#search-box').val() + "<br>");
		// $('#results').html($('#search-box').val())

		function imdbSearch(a) {
		$.get(
			'http://www.omdbapi.com',
			{
				s: $('#search-box').val()
				// y: year,
				// type: type,
				// tomatoes: tomatoes
			},
			onSearchResults,
			'json'
		);
	}

		function tomatoMeter(x) {
			$.get(
				'http://www.omdbapi.com',
				{
					i: x,
					tomatoes: true
				},
				onTomatoResults,
				'json'
			);
		}

		function onSearchResults(data) {
			console.log(data);
			console.log(data.Search[0].imdbID);
			tomatoMeter(data.Search[0].imdbID);
			// for (var i = 0; i < data.Search.length; i++) {
			// 	$('#results').append("<br>" + data.Search[i].Title + "<br>" + data.Search[i].Year + "<br>");
			// };
			// $('#results').html(data.Search[0].Title + "<br>" + data.Search[0].Year);
		}

		function onTomatoResults(data) {
			console.log(data);
			console.log(data.Genre);
			// $('#results').html(data.Title + "<br>" + data.Year + "<br>" + data.Actors);
		}

		console.log(imdbSearch());
		// $('#results').html(data.Title.Year.Actors);
		}
}

