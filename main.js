$(document).ready(onReady);

function onReady() {
	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		// 1. Input value
		console.log($('#search-box').val());

		function imdbSearch(a) {
		$.get(
			'http://www.omdbapi.com',
			{
				s: $('#search-box').val()
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
			for (var i = 0; i < data.Search.length; i++) {
				$('#title').append("<br>" + data.Search[i].Title + "<br>");
				$('#year').append("<br>" + data.Search[i].Year + "<br>");
				tomatoMeter(data.Search[i].imdbID);
			};
		}

		function onTomatoResults(data) {
			console.log(data);
			console.log(data.Genre);
			$('#genre').append("<br>" + data.Genre + "<br>");
		}

		imdbSearch();
		}
}
