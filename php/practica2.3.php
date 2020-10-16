<?php

$matrixLenght = $_GET['N'];
$response = [];
for ($i=0; $i < $matrixLenght; $i++) { 
    $rowTmp = [];
    for ($j=0; $j < $matrixLenght; $j++) { 
        $rowTmp [] = rand($matrixLenght, 2 * $matrixLenght);
    }
    $response [] = $rowTmp;
}

echo json_encode($response);