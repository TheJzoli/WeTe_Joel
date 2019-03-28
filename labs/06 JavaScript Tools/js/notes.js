"use strict";

var notes = new Array();
var duplicate = false;
loadList();

function addItem() {
	var textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();

	for (var i=0; i<notes.length; i++) {
		if (itemText === notes[i].title) {
			notes[i].quantity++;
			duplicate = true;
			break;
		}
	}

	if (!duplicate) {
		var newItem = {title: itemText, quantity: 1};
		notes.push(newItem);
		displayList();
	} else {
		displayList();
		duplicate = false;
	}

	saveList();

}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
		node.innerHTML = html;
		table.appendChild(node);
		saveList();
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	saveList();
	loadList();
}

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

var button = document.getElementById('add');
button.onclick = addItem;
