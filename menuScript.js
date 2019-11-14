// JavaScript Document

var menu;
var menuIcon;
var menuIconClose;

var titleBox;

var id;

var fps = 60;
var seconds = 0.75;

var steps = 0;
var reverseSteps = fps * seconds;

var menuDisplayed = false;

window.addEventListener('DOMContentLoaded', function() {
	
	load();
	
}, false);

function load() {
	try {
		titleBox = document.getElementById('div-title');
	} catch(error) {
		console.log('Not on front page.');
	}
	
	menuIcon = document.getElementById('menu-icon-open');
	menuIconClose = document.getElementById('menu-icon-close');
	
	menu = document.getElementById('menu');
	
	menuIconClose.style.display = 'none';
	
	console.log('DOM Loaded');
}

function rotate() {
	clearInterval(id);
	id = setInterval(animate, 1000 / fps);
}

function rotateReverse() {
	clearInterval(id);
	id = setInterval(resetAnimation, 1000 / fps);
}

function animate() {
	menuIconClose.style.display = 'block';
	if(steps >= seconds * fps) {
		clearInterval(id);
		menuIcon.style.display = 'none';
	} else {
		steps++;
		reverseSteps--;
		transform();
	}
}

function resetAnimation() {
	menuIcon.style.display = 'block';
	if(steps <= 0) {
		clearInterval(id);
		menuIconClose.style.display = 'none';
	} else {
		steps--;
		reverseSteps++;
		transform();
	}
}

function transform() {
	/*if(titleBox != null){
		titleBox.style.left = (getReverseStep(25) + 25) + '%';
		titleBox.style.transform = 'translate(-50%, -50%) rotate(' + getStep(-90) + 'deg)';
	}*/
	menu.style.left = getReverseStep(100) + '%';
	menu.style.opacity = Math.min(1, (getStep(250) / 100)) ;
	menuIcon.style.transform = 'rotate(-' + getStep(360) + 'deg)';
	menuIcon.style.opacity = 1 / seconds / fps * reverseSteps;
	menuIconClose.style.transform = menuIcon.style.transform;
	menuIconClose.style.opacity = 1 / seconds / fps * steps;
}

function getStep(max) {
	return Math.sin((Math.PI / 2) * steps / (seconds * fps)) * Math.min(max, Math.floor(max / seconds / fps * steps));
}

function getReverseStep(max) {
	return Math.sin((Math.PI / 2) * reverseSteps / (seconds * fps)) * Math.min(max, Math.floor(max / seconds / fps * reverseSteps));
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