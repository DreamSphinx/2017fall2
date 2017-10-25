<script src = "exerciseinput.js"></script>
const $ = require("jquery");


var myArray = Array();
$(document).ready(function() {
    $("#b1").click(function(){
        if(document.getElementById("situps").value != "")
        {
            myArray.push("Sit-ups: " + document.getElementById("situps").value + "<br>");
            $("#card1").append('<span>' + myArray[myArray.length - 1] + '</span>');
            situps.value = "";
        }
    });
});