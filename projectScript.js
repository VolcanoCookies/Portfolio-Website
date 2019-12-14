// JavaScript Document

var projectContainer;
var projects;

window.addEventListener('DOMContentLoaded', function() {
	
	projectContainer = document.getElementById('project-container');
	
	projects = JSON.parse(Get('https://api.myjson.com/bins/ouq54'));
	
	for(i in projects.projects) {
		var project = projects.projects[i];
		var title = project.title;
		var description = project.description;
		var image = project.image;
		console.log("Title: " + title + "\nDesciption: " + description + "\nImage: " + image);
	}
	
}, false);

function Get(yourUrl){
	var Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("GET",yourUrl,false);
	Httpreq.send(null);
	return Httpreq.responseText;          
}