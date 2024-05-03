const fs = require('fs');
const http = require('http')
const server = http.createServer(function (request, response) {
	console.log(request.method, request.url);
	const text = fs.readFileSync('index.html', 'utf-8');
	response.end(text);
})

server.listen(3500)

/*
Похоже, проблема заключается в том, что вы обрабатываете все запросы на сервере одинаково и возвращаете содержимое файла index.html независимо от того, какой ресурс запрашивается. Для того чтобы ваш сервер возвращал содержимое файла CSS, вы должны добавить проверку в обработчик запросов и отдавать соответствующий файл в зависимости от запрашиваемого URL.

*/
