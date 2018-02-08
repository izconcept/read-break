// Inject javascript code into page here

$(document).ready(function() {

	setTimeout(function() {
		if($('article')) {
			article = $('article');

			articleText = article.text();

			var host = window.location.hostname;

			var WPM = 200;

			var words = articleText.split(' ').length;

			estimatedReadTime = Math.round(words/WPM);

			console.log("Estimated Read Time: " + estimatedReadTime + " Minutes");

			switch(host) {
			case "www.newyorker.com":
				console.log('The New Yorker');
				article.find('header').prepend("<span>Estimated Read Time: " + estimatedReadTime + " Minutes</span>")
				break;
			case "www.economist.com":
				console.log('The Economist');
				break;
			case "www.theatlantic.com":
				console.log('The Atlantic');
				break;
			case "www.washingtonpost.com":
				console.log('The Washington Post');
				break;
			}
		}
	}, 1000)
	
})

