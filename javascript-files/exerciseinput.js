var myArray = Array();
$(document).ready(function() {
    $("#b1").click(function(){
        if(document.getElementById("situps").value != "")
        {
            myArray.push("Sit-ups: " + document.getElementById("situps").value + " at " + document.getElementById("time1").value + "<br>");
            $("#card1").append('<span>' + myArray[myArray.length - 1] + '</span>');
            situps.value = "";
            time1.value = "";
        }
    });
    $("#b2").click(function(){
        if(document.getElementById("pushups").value != "") {
            myArray.push("Push-ups: " + document.getElementById("pushups").value  + " at " + document.getElementById("time2").value + "<br>");
            $("#card1").append('<span>' + myArray[myArray.length - 1] + '</span>');
            pushups.value = "";
            time2.value = "";
        }
    }); 
    $("#b3").click(function(){
        if(document.getElementById("runningtime").value != "") {
            myArray.push("Running Time: " + document.getElementById("runningtime").value + " minutes at "  + document.getElementById("time3").value + "<br>");
            $("#card1").append('<span>' + myArray[myArray.length - 1] + '</span>');
            runningtime.value = "";
            time3.value = "";
        }
    }); 
    $("#b4").click(function(){
        if(document.getElementById("lunges").value != "") {
            myArray.push("Lunges: " + document.getElementById("lunges").value + " at " + document.getElementById("time4").value  + "<br>");
            $("#card1").append('<span>' + myArray[myArray.length - 1] + '</span>');
            lunges.value = "";
            time4.value = "";
        }
    });
    $("#b5").click(function(){
        if(document.getElementById("benchpressesweight").value != "" && document.getElementById("benchpressesnum").value != "") {
            myArray.push("Bench Presses: " + document.getElementById("benchpressesnum").value + " at " + document.getElementById("benchpressesweight").value + " lbs at " + document.getElementById("time5").value + "<br>");
            $("#card1").append('<span>' + myArray[myArray.length - 1] + '</span>');
            benchpressesweight.value = "";
            benchpressesnum.value = "";
            time5.value = "";
        }
    }); 
});