$(document).ready(function() {


  $('#user-input').submit(function(event) {
    event.preventDefault();
    var userInput = $("#romNumeral").val();
    var output = converter(userInput);

    $("#result").append(output);
  });
});
