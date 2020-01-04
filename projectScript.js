// JavaScript Document

var projectContainer;
var projects;

var template;
var jsonText;

var callsProcessed = 0;

var urls = [
	'https://raw.githubusercontent.com/VolcanoCookies/Portfolio-Website/master/templates/projectTemplate.html',
	'https://raw.githubusercontent.com/VolcanoCookies/Portfolio-Website/master/projects.json'
];

urls.forEach(url => {
	getAsync(url, context => response(context, url));
});

function response(responseText, url) {
	switch (url) {
		case urls[0]:
			template = responseText;
			callsProcessed++;
			break;
		case urls[1]:
			jsonText = responseText;
			callsProcessed++;
			break;
		default:
			break;
	}

	if (callsProcessed === urls.length) populateList();
}

$(window).on('ready', function() {
	projectContainer = document.getElementById('project-list');
});

function populateList() {
	var regex = new RegExp('(^| )//.*|^$');

	jsonText = jsonText.replace(regex, '');
	jsonText.replace();

	console.log(jsonText);

	projects = JSON.parse(jsonText);

	for (i in projects.projects) {
		var project = projects.projects[i];

		createProject(project);
	}
}

function getAsync(url, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	};
	xmlHttp.open('GET', url, true); // true for asynchronous
	xmlHttp.send(null);
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

	console.log(
		'Title: ' + title + '\nDesciption: ' + description + '\nImage: ' + image
	);
	console.log(element.innerHTML);

	projectContainer.innerHTML += element.innerHTML;
}
