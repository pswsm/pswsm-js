<?php
$data = file_get_contents("php://input");
$parsedData = json_decode($data);
echo "Done";
?>
