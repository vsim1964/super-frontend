const http = require('http');
const fs = require('fs');

const PORT = 3001;

const server = http.createServer(function (request, response) {
	console.log('Привет!');
	fs.readFile('./index.html', 'utf8', function (err, data) {
		if (err) {
			console.error('Ошибка при чтении файла:', err);
			response.writeHead(500, { 'Content-Type': 'text/plain' });
			response.end('Internal Server Error');
		} else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(data);
		}
	});
});

server.listen(PORT, function () {
	console.log(`Сервер запущен на порту ${PORT}`);
});
