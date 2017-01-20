var converter = (function(hey){
  if (hey.length = 3) {
    return ("M");
    }
    else {
      return ("nope");
    }
});


// if (userInput[0] = "1") {
//   var thouPlace = "M";
// } else if (userIput[0] = "2"){
//   var thouPlace  = "MM";
// } else if (userInput[0] = "3") {
//   var thouPlace = "MMM";
// } else {
//   return "error";
// };




$(document).ready(function() {


  $('#user-input').submit(function(event) {
    event.preventDefault();
    var userInput = $("#romNumeral").val();
    alert(userInput);
    var output = converter(userInput);
    alert(output);
    $("#result").append(output);
  });
});


// userInput[0].splice();
// alert("3")
// userInput[0].text("M");

// if index = 0 then check.length if length = 3 then index 0 = thousands place
// then check value of thousands place and place that many Ms back in the array
