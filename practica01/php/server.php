<?php
define("USERS", ["pswsm" => ["password" => "pswsm-adm", "role" => "administrador"], "notpswsm" => ["password" => "pswsm-clt", "role" => "client"]]);
$data = file_get_contents("php://input");
$parsedData = json_decode($data, true);
if (array_key_exists($parsedData["username"], USERS)) {
	if (USERS[$parsedData["username"]]["password"] == $parsedData["password"]) {
		$ret_value = json_encode([$parsedData["username"], USERS[$parsedData["username"]][1]]);
	} else {
		$ret_value = json_encode("Password does not match");
	}
} else {
	$ret_value = json_encode("Username not found");
};
echo $ret_value;
?>
