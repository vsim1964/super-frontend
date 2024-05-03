const fs = require('fs');
const http = require('http');



const path = require('path');

const server = http.createServer(function (request, response) {
	console.log(request.method, request.url);

	let filePath = '.' + request.url;
	if (filePath === './') {
		filePath = './index.html';
	}

	const extname = path.extname(filePath);
	let contentType = 'text/html';
	switch (extname) {
		case '.css':
			contentType = 'text/css';
			break;
	}

	fs.readFile(filePath, function (error, content) {
		if (error) {
			if (error.code == 'ENOENT') {
				response.writeHead(404);
				response.end('404 Not Found');
			}
			else {
				response.writeHead(500);
				response.end('Internal Server Error: ' + error.code);
			}
		}
		else {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(content, 'utf-8');
		}
	});
});

server.listen(3500);
