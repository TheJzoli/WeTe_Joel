//console.log('page loaded');

console.log(document);

document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelectorAll('#summary p')[0].innerHTML = email;
};

document.querySelector('#userForm input[type="text"]').onkeyup = function() {
	console.log('updating name');
	var name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
};

document.querySelector('#userForm input[type="password"]').onkeyup = function() {
	console.log('updating password');
	var password = document.querySelector('#userForm input[type="password"]').value;
	document.querySelectorAll('#summary p')[1].innerHTML = password;
};