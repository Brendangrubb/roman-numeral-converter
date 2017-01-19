$(document).ready(function() {
  $('#user-input').submit(function(event) {
    event.preventDefault();
    var userInput = $("#romNumeral").val();
    var splitInput = userInput.split('');
    alert(splitInput);
  });
});
