<?php
define($USERS, ["pswsm" => ["pswsm-adm", "administrador"], "notpswsm" => ["pswsm-clt", "client"]]);
$data = file_get_contents("php://input");
$parsedData = json_decode($data);
var_dump($parsedData);
?>
