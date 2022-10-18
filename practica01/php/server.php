<?php
define('FIELDS', ['password', 'role']);


function csvToArr(): array {
	$fh = fopen("./users.csv", 'r');
	$kvArr = [];
	while (!feof($fh)) {
		$tmpArr = fgetcsv($fh);
		$kvArr[$tmpArr[0]] = [FIELDS[0] => $tmpArr[1], FIELDS[1] => $tmpArr[2]];
	}
	fclose($fh);
	return $kvArr;
}

function searchUser(string $username, string $password): string {
	$users = csvToArr();
	if (array_key_exists($username, $users)) {
		if ($users[$username]["password"] == $password) {
			$ret_value = json_encode([$username, $users[$username]["role"]]);
		} else {
			$ret_value = json_encode("Password does not match");
		}
	} else {
		$ret_value = json_encode("Username not found");
	};
	return $ret_value;
}

function makeUser(string $username, string $password, string $role = 'user'): string {
	if (!array_key_exists($username, csvToArr())) {
		$fh = fopen("./users.csv", 'a');
		fputcsv($fh, [$username, $password, $role]);
		fclose($fh);
		$retValue = json_encode([$username]);
	} else {
		$retValue = json_encode("User already exists.");
	};
	return $retValue;
}

$data = file_get_contents("php://input");
$parsedData = json_decode($data, true);

switch ($parsedData["operation"]) {
	case 'login':
		echo searchUser($parsedData["username"], $parsedData["password"]);
		break;

	case 'create':
		echo makeUser($parsedData["username"], $parsedData["password"]);
		break;
	
	default:
		echo json_encode("Could not reach DB");
		break;
}

?>
