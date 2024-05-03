const fs = require('fs');

const text = fs.readFileSync('01.js', 'utf8');
console.log(text);

/*
Куайн (квайн, англ. quine) — компьютерная программа,
которая выдаёт на выходе точную копию своего исходного текста.
При этом программы, использующие внешние данные
(чтение текста программы из файла,
	ввод его с клавиатуры и так далее), куайнами не считаются.
*/


// const text = fs.readFileSync('server.js', 'utf-8');
// const txt = fs.readFileSync('script.js', 'utf-8');
// console.log(text, txt);

// const server = http.createServer(function (request, response) {
// 	console.log('я энд-пойнт ервер находится в ожидании изменений в моей строке. они отображаются в терминале при перезагрузке страниц');
// })
