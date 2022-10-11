<?php
define("USERS", ["pswsm" => ["pswsm-adm", "administrador"], "notpswsm" => ["pswsm-clt", "client"]]);
$data = file_get_contents("php://input");
$parsedData = json_decode($data);
if (array_key_exists($parsedData["username"], $USERS)) {
	$ret_value = json_encode([$USERS[$parsedData["username"]]]);
	echo $ret_value;
};
?>
