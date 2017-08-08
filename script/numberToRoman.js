var error = document.querySelector("#error");
var disabledInput = document.querySelector("#disabledInput");
var convert = document.querySelector("#convert");
var numb = document.querySelector("#numb");

convert.addEventListener("click", function() {
    if(numb.value === "") {
        error.innerHTML="<div class='alert alert-danger' role='alert'>You didn't fill in all fields!</div>";
    }
    else {
        error.innerHTML = "";

        disabledInput.value = convertToRoman(parseInt(numb.value));
    }
});

function convertToRoman(num) {
 var romans = ["I", "V", "X", "L", "C", "D", "M"],
     ints = [],
     romanNumber = [],
     numeral = "";
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i<ints.length; i++){
      units(ints[i]);
  }
  function units(){
    numeral = romans[i*2];
    switch(ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[(i*2)+1]));
        break;
      case 5:
        romanNumber.push(romans[(i*2)+1]);
        break;
      case 6:
        romanNumber.push(romans[(i*2)+1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
        break;
      case 9:
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2]));
      }
    }
  return romanNumber.reverse().join("").toString();
}