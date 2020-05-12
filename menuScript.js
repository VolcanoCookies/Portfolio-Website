// Wait for window to be ready and all elements loaded
$(window).on('ready', function() {
	// Replace the element with class nav with the one modular one
	$('#nav').load(
		'https://raw.githubusercontent.com/VolcanoCookies/Portfolio-Website/master/templates/navTemplate.html'
	);
	//	$('#footer').load(
	//		'https://raw.githubusercontent.com/VolcanoCookies/Medusa-Network/master/templates/footerTemplate.html'
	//	);
});