var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function (req, res) {

	url = 'https://www.youcaring.com/api-all-star-teams-649107';

	request(url, function (error, response, html) {
		if (!error) {
			var $ = cheerio.load(html);

			var json = {
				raised: ""
			};

			var text = $('.fundraiserProgress-current').text();
			var ending = text.indexOf(" ");
			json.raised = text.slice(0, ending);
		}

		res.send(json)

	});
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;