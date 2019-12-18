<?php
	if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
		$uri = 'https://';
	} else {
		$uri = 'http://';
	}
	$uri .= $_SERVER['HTTP_HOST'];
	
	$msg = 'From: ' + $_POST["email"] + '\n\n' + $_POST["message"];
	
	$msg = wordwrap($msg,70);
	
	mail('VolcanoCookies@gmail.com',$_POST["subject"], $msg);
	
	header('Location: '.$uri.'/index.html');
	exit;
?>