// JavaScript Document

var projectContainer;
var projects;

var template = '<li class="project-list-item"><a class="project-item-link" href="project_link"><img class="project-image" src="project_image" alt="Project Image Unavailable"><hr class="project-description"><h2 class="project-title">project_title</h2><hr class="project-description"><p class="project-description">project_description</p></a></li>';

window.addEventListener('DOMContentLoaded', function() {
	
	projectContainer = document.getElementById('project-list');
	
	var jsonText = Get('https://raw.githubusercontent.com/VolcanoCookies/Portfolio-Website/master/projects.json');
	
	jsonText = jsonText.replace('(^| )\/\/.*|^$', '');
	
	console.log(jsonText);
	
	projects = JSON.parse(jsonText);
	
	for(i in projects.projects) {
		
		var project = projects.projects[i];
		
		createProject(project);
	}
	
}, false);

function Get(yourUrl){
	var Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("GET",yourUrl,false);
	Httpreq.send(null);
	return Httpreq.responseText;          
}

function createProject(project) {
	
	var title = project.title;
	var description = project.description;
	var image = project.image;
	var link = project.link;
	
	var element = document.createElement('project');
	var html = template.trim();
	html = html.replace('project_title', title);
	html = html.replace('project_description', description);
	html = html.replace('project_image', image);
	html = html.replace('project_link', link);
	
	element.innerHTML = html;
	
	console.log("Title: " + title + "\nDesciption: " + description + "\nImage: " + image);
	console.log(element.innerHTML);
	
	projectContainer.innerHTML += element.innerHTML;
	
}