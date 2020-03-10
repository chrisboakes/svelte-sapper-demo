import news from './_news.js';

const contents = JSON.stringify(news);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
