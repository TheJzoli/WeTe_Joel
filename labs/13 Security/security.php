<?php
    $string = "I'll \"walk\" the <b>dog</b> now";  // notice \-sign before double quotes!

    $a = htmlentities($string);
    $b = html_entity_decode($string);
    $c = htmlspecialchars($string);
    $d = strip_tags($string);

    echo $a."<br>".$b."<br>".$c."<br>".$d;
?>
