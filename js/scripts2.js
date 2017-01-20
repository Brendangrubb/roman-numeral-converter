$(document).ready(function() {


  $('#user-input').submit(function(event) {
    event.preventDefault();
    var userInput = $("#romNumeral").val();
    var splitInput = userInput.split('');
    var reverseInput = splitInput.reverse();
    for (index = 0; index < reverseInput.length; index += 1) {
      var output = converter(reverseInput[index]);
      // output = output.join('');
      reverseInput[index] = output;
    };
    $("#result").text(output);
  });
});

var arabicIndex = ['1','2','3','4','5','6','7','8','9']
var zeroIndexRoman = ['I','II','III','IV','V','VI','VII','VIII','IX']
var oneIndexRoman = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
var twoIndexRoman = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
var threeIndexRoman = ['M','MM','MMM']

function converter(reverseInput) {
  // if (reverseInput[0] === true) {
  for (i = 0; i < 9; i++) {
    for (z = 0; z < 9; z++)
    if (reverseInput[i] === arabicIndex[z]) {
    arabicIndex[z] = zeroIndexRoman[z];
      alert(arabicIndex[z]);
      return arabicIndex[z]
    }
  // }
}
};
//   if (userInput.length === 1 && reverseInput === 1) {
//     var newInput = userInput.replace(reverseInput, "I");
//         alert("newInput");
//   }
//   else if (reverseInput.length === 2) {
//     alert("userInput is 2")
//   }
//   else if (reverseInput.length === 3) {
//     alert("userInput is 3")
//   }
//   else if (reverseInput.length === 4) {
//     alert("userInput is 4")
//   }
// };




// var splitNumber = userInput.split('');
// for (i = -1; i <= 4; i++) {
//
// }


// var inputCount = userInput.length;
//   if (inputCount === 4 && userInput[0] === "1") {
//     var newInput = userInput.replace(userInput[0], "M");
//     alert(newInput);
//   }
//   else if (inputCount === 4 && userInput[0] === "2") {
//     var newInput = userInput.replace(userInput[0], "MM");
//     alert(newInput);
//   }
//   else if (inputCount === 4 && userInput[0] === "3") {
//     var newInput = userInput.replace(userInput[0], "MMM");
//     alert(newInput);
//   }



// var reverse = userInput.reverse();
// alert(reverse[0]);
