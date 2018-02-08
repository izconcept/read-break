// Inject javascript code into page here

if($('article').text()) {
	article = $('article').text();

	var host = window.location.hostname

	switch(host) {
	case "www.newyorker.com":
		console.log('The New Yorker');
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