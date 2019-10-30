// JavaScript Document

var title;
var underTitle;
var menu;
var menuIcon;
var menuIconClose;

var titleBox;

var id;

var fps = 60;
var seconds = 1;

var steps = 0;
var reverseSteps = fps * seconds;

var menuDisplayed = false;

window.addEventListener('DOMContentLoaded', function() {
	
	title = document.getElementById('page-title');
	underTitle = document.getElementById('page-under-title');
	menu = document.getElementById('menu');
	menuIcon = document.getElementById('menu-icon-open');
	menuIconClose = document.getElementById('menu-icon-close');
	
	titleBox = document.getElementById('div-title');
	
	menuIconClose.style.display = 'none';
	
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
	console.log(titleBox.style.transform);
	titleBox.style.left = (getReverseStep(25) + 25) + '%';
	titleBox.style.transform = 'translate(-50%, -50%) rotate(' + getStep(-90) + 'deg)';
	menu.style.left = getReverseStep(100) + '%';
	menuIcon.style.transform = 'rotate(-' + getStep(360) + 'deg)';
	menuIcon.style.opacity = 1 / seconds / fps * reverseSteps;
	menuIconClose.style.transform = menuIcon.style.transform;
	menuIconClose.style.opacity = 1 / seconds / fps * steps;
	console.log(titleBox.style.transform);
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