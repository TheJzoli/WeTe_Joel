
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;
/*
var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + ' ' + books[i].year;
	list.appendChild(item);
}

td = document.createElement('td');
var tds = [];
for (var i=0; i<data.count; i++) {
	tds.push(td);
}

for (var i=0; i<books.length; i++) {
	var table = document.createElement('table')
	var tr = document.createElement('tr');

	tds[0].innerHTML = books[i].title;
	tr.appendChild(tds[0]);
	console.log(tr);
	tds[1].innerHTML = books[i].year;
	tr.appendChild(tds[1]);
	console.log(tr);
	tds[2].innerHTML = books[i].isbn;
	tr.appendChild(tds[2]);
	console.log(tr);
	for (var j=0; j<books[i].authors.length; j++) {
		tds[3+j].innerHTML = books[i].authors[j];
		tr.appendChild(tds[3+j]);
		console.log(tr);
	}
	table.appendChild(tr);
	console.log(table);
}

document.body.appendChild(table);
 */

var tbl  = document.createElement('table');
tbl.style.width  = '100px';
tbl.style.border = '1px solid black';
var headerText = ['Title', 'Year', 'ISBN', 'Authors'];
var allBookInfos = [];

for(var i=0; i<data.count; i++) {
	var bookInfo = [];
	bookInfo.push(books[i].title);
	bookInfo.push(books[i].year);
	bookInfo.push(books[i].isbn);
	bookInfo.push(books[i].authors);
	allBookInfos.push(bookInfo);
}

var header = tbl.insertRow();
for(var i=0; i<bookInfo.length; i++) {
	var th = header.insertCell();
	th.appendChild(document.createTextNode(headerText[i]));
	th.style.border = '1px solid black';
	th.style.fontWeight = 'bold';
}

for(var i=0; i<books.length; i++){
	var tr = tbl.insertRow();
	for(var j=0; j<bookInfo.length; j++){
			var td = tr.insertCell();
			td.appendChild(document.createTextNode(allBookInfos[i][j]));
			td.style.border = '1px solid black';
	}
}
var bookTitle = document.createElement('h1');
document.body.appendChild(bookTitle);
document.body.appendChild(tbl);

var rows = document.getElementsByTagName('tr');
/*
for (var i=1; i<rows.length; i++) {
	rows[i].onclick = function () {
		bookTitle.innerHTML = rows[i].getElementsByTagName('td')[0].textContent;
	}
}
*/
rows[1].onclick = function () {
	bookTitle.innerHTML = rows[1].getElementsByTagName('td')[0].textContent;
};
rows[2].onclick = function () {
	bookTitle.innerHTML = rows[2].getElementsByTagName('td')[0].textContent;
};
rows[3].onclick = function () {
	bookTitle.innerHTML = rows[3].getElementsByTagName('td')[0].textContent;
};
rows[4].onclick = function () {
	bookTitle.innerHTML = rows[4].getElementsByTagName('td')[0].textContent;
};
rows[5].onclick = function () {
	bookTitle.innerHTML = rows[5].getElementsByTagName('td')[0].textContent;
};