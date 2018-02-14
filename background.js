$(document).ready(function() {
	console.log('Loaded')
	var host = window.location.hostname;
	var WPM = 200;
	console.log(host)
	setTimeout(function() {
		if($('article') && ['www.newyorker.com', 'www.theatlantic.com', 'www.washingtonpost.com', 'www.nytimes.com'].includes(host)) {
			article = $('article');

			articleText = article.text();

			var words = articleText.split(' ').length;

			var estimatedReadTime = Math.round(words/WPM);

			var read_time_div = "<div class='read-div'><span class='readTime'>Estimated Read Time: " + estimatedReadTime + " Minutes</span></div>"


			switch(host) {
			case "www.newyorker.com":
				console.log('The New Yorker');
				article.prepend(read_time_div)
				break;
			case "www.theatlantic.com":
				console.log('The Atlantic');
				article.find('.article-cover-content-wrapper').prepend(read_time_div)
				break;
			case "www.washingtonpost.com":
				console.log('The Washington Post');
				article.prepend(read_time_div)
				break;
			case "www.nytimes.com":
				console.log('The New York Times');
				article.find('header').prepend(read_time_div)
				break;
			}

		}
		else if(host == "www.economist.com" && $('.blog-post')) {

			var article = $('.blog-post');

			var articleText = article.text();

			var words = articleText.split(' ').length;

			var estimatedReadTime = Math.round(words/WPM);

			var read_time_div = "<div class='read-div'><span class='readTime'>Estimated Read Time: " + estimatedReadTime + " Minutes</span></div>"
			article.prepend(read_time_div)
		}
	}, 800)
	
})

