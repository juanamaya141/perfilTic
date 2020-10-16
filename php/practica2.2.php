<?php
function isPrime($number){
    if($number < 2) return false;
    if($number == 2) return true;
    for ($i=2; $i <= sqrt($number); $i++) { 
        if($number % $i == 0) return false;
    }
    return true;
}

$max = $_GET['N'];
if($max >= 2){
    echo "2";
}
for ($i=3; $i <= $max; $i++) { 
    if(isPrime($i)){
        echo ", $i";
    }
}