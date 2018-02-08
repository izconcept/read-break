// Inject javascript code into page here

$(document).ready(function() {
	console.log('Loaded')
	setTimeout(function() {
		if($('article')) {
			article = $('article');

			articleText = article.text();

			var host = window.location.hostname;

			var WPM = 200;

			var words = articleText.split(' ').length;

			estimatedReadTime = Math.round(words/WPM);


			switch(host) {
			case "www.newyorker.com":
				console.log('The New Yorker');
				article.prepend("<span class="readTime">Estimated Read Time: " + estimatedReadTime + " Minutes</span>")
				break;
			case "www.economist.com":
				console.log('The Economist');
				article.prepend("<span class="readTime">Estimated Read Time: " + estimatedReadTime + " Minutes</span>")
				break;
			case "www.theatlantic.com":
				console.log('The Atlantic');
				article.find('.article-cover-content-wrapper').prepend("<span class="readTime" >Estimated Read Time: " + estimatedReadTime + " Minutes</span>")
				break;
			case "www.washingtonpost.com":
				console.log('The Washington Post');
				article.prepend("<span class="readTime">Estimated Read Time: " + estimatedReadTime + " Minutes</span>")
				break;
			}

			console.log("Estimated Read Time: " + estimatedReadTime + " Minutes");
		}
	}, 800)
	
})

