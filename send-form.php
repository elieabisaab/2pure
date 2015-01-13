<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$businessname = $_POST['businessname'];
$tel = $_POST['tel'];
$inquiry = $_POST['inquiry'];
$categ = $_POST['categ'];
$msg = '';

if ($fullname == '' or $email == '' or $businessname == '' or $tel == '' or $inquiry == '' or empty($categ)) {
	$msg = 'All fields are required';	
} else if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $email)) {
	$msg = 'Invalid email';
} else {
	$body = 'Full Name: '.$fullname.'<br>Email: <a href=mailto:'.$email.'>'.$email.'</a><br>Business Name: '.$businessname.'<br>Phone: '.$tel.'<br>Inquiry: '.$inquiry.'<br>';
	for ($i=0; $i<count($categ); $i++) {
		$body .= '- '.$categ[$i].'<br>';
	}
	$to = 'info@2pure.com;samer@2pure.com';
	$subject = 'Inquiry Form';
	$headers = 'MIME-Version: 1.0'."\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
	$headers .= 'From: '.$fullname.' <'.$email.'>'."\r\n";
	mail($to, $subject, $body, $headers);
	$msg = 'success';
}
echo $msg;
?>