// JavaScript Document


$(window).on('load', function() {
	
	$('#email-field').on('focusin', function() {
		
		var field = $(this).context;
		
		if(field.value.trim() == 'Email') {
			field.value = '';
		}
		
		field.style.color = 'black';
		
	});
	
	$('#email-field').on('focusout', function() {
		
		var field = $(this).context;
		
		if(field.value.trim() == '') {
			field.value = 'Email';
			field.style.color = '#ABABAB';
		}
		
	});
	
	$('#subject-field').on('focusin', function() {
		
		var field = $(this).context;
		
		if(field.value.trim() == 'Subject') {
			field.value = '';
		}
		
		field.style.color = 'black';
		
	});
	
	$('#subject-field').on('focusout', function() {
		
		var field = $(this).context;
		
		if(field.value.trim() == '') {
			field.value = 'Subject';
			field.style.color = '#ABABAB';
		}
		
	});
	
	$('#message-field').on('focusin', function() {
		
		var field = $(this).context;
		
		if(field.value.trim() == 'Message') {
			field.value = '';
		}
		
		field.style.color = 'black';
		
	});
	
	$('#message-field').on('focusout', function() {
		
		var field = $(this).context;
		
		if(field.value.trim() == '') {
			field.value = 'Message';
			field.style.color = '#ABABAB';
		}
		
	});
	
});

