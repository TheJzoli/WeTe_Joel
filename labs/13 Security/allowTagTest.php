<?php
    $string = "<b>Testing</b> <i>different</i> <code>HTML</code> tags";
    echo strip_tags($string, "<i>");
?>
<script>
    var i = document.getElementsByTagName("i");
    i[0].onmouseover = colorChange;
    i[0].onmouseout = colorNormal;
    function colorChange() {
        i[0].style.color = "blue";
    }
    function colorNormal() {
        i[0].style.color = "black";
    }
</script>
