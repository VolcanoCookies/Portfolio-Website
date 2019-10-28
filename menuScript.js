// JavaScript Document

var title;
var underTitle;
var menu;

var id;

var steps = 0;
var fps = 60;
var seconds = 2;

var menuDisplayed = false;

window.addEventListener('DOMContentLoaded', function() {
	
	title = document.getElementById('page-title');
	underTitle = document.getElementById('page-under-title');
	menu = document.getElementById('menu');
	
	document.getElementById('menu-icon').addEventListener('onmouseover', rotate());
	
	document.getElementById('menu-icon').addEventListener('onmouseleave', rotateReverse());
	
	console.log('DOM Loaded')
}, false);

function rotate() {
	clearInterval(id);
	id = setInterval(animate, 1000 / fps);
}

function rotateReverse() {
	clearInterval(id);
	id = setInterval(resetAnimation, 1000 / fps);
}

function animate() {
	if(steps >= seconds * fps) {
		clearInterval(id);
	} else {
		steps++;
		transform();
	}
}

function resetAnimation() {
	if(steps <= 0) {
		clearInterval(id);
	} else {
		steps--;
		transform();
	}
}

function transform() {
	title.style.left = '-' + getStep(30) + '%';
	underTitle.style.left = title.style.left;
	underTitle.style.transform = 'rotate(-' + getStep(90) + 'deg)';
	menu.style.width = getStep(50) + '%';
}

function getStep(max) {
	return Math.sin((Math.PI / 2) * steps / (seconds * fps)) * Math.min(max, Math.floor(max / seconds / fps * steps));
}

function displayMenu() {
	
	if(menuDisplayed) {
		rotateReverse();
		menuDisplayed = false;
	} else {
		rotate();
		menuDisplayed = true;
	}
	
}