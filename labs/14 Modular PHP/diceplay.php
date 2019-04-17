<?php

include("diceclasses.inc.php");

$faces = $_GET["faces"];
$throws = $_GET["throws"];
$p = $_GET["bias"];
$mat = $_GET["material"];

$results = array();

// make dice
if (isset($p)){
    if (isset($mat)) {
        $pDice = new PhysicalDice($faces, $mat, $p);
    } else {
        $dice = new Dice($faces, $p);
    }
} else {
    if (isset($mat)) {
        $pDice = new PhysicalDice($faces, $mat, null);
    } else {
        $dice = new Dice($faces, null);
    }
}
for ($i = 1; $i<=$throws; $i++) {
    $res = $dice->cast();
    $results[] = array('id' => strval($i), 'res' => strval($res));
}
$freqs = array();
for ($i = 1; $i<=$faces; $i++) {
    $freqs[] = array ('eyes' => strval($i), 'frequency' => strval($dice->getFreq($i)));
}
echo json_encode(array('faces'=>$faces,'results'=>$results,'frequencies'=>$freqs, 'average number of eyes'=>$dice->average()));



?>