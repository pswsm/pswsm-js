<?php
define("USERS", ["pswsm" => ["pswsm-adm", "administrador"], "notpswsm" => ["pswsm-clt", "client"]]);
$data = file_get_contents("php://input");
$parsedData = json_decode($data, true);
if (array_key_exists($parsedData["username"], USERS)) {
	$ret_value = json_encode([$parsedData["username"], USERS[$parsedData["username"]][1]]);
	echo $ret_value;
};
?>
