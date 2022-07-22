<?php
if (isset($_POST['phone'])) {
	$phone = $_POST['phone'];
	$name = $_POST['phone'];
}
if ($phone != '') {
	$phone = '<a href="tel:+'.$phone.'" className="number">Телефон: '.$phone.'</a>';
	$sub = "=?utf-8?b?" . base64_encode("Заявка с сайта. Телефон: +$name") . "?=";
	$address = "edemritualsalon@yandex.ru";
	$from_name = "Lead Edemritual";
	$from_email = "lead@fast-marketing24.ru";
	$mes = "$phone";
	$headers = "Content-type:text/html; charset = utf-8 \r\n";
	$headers .= "From: =?UTF-8?B?" . base64_encode($from_name) . "?= <" . $from_email . ">\r\n";
	mail($address, $sub, $mes, $headers);
	echo "success";
} else {
	echo "error";
}
?>