var basic = document.querySelector("#basic");
var komp = document.querySelector("#comp");
var sup= document.querySelector("#sup");

var firstInput = document.querySelector("#firstInput");
var secondInput = document.querySelector("#secondInput");

var button = document.querySelector("#button");
var resetB = document.querySelector("#reset");

var error = document.querySelector("#error");
var osnova;

resetB.addEventListener("click", function() {
    reset();
});

button.addEventListener("click", function() {
    if(firstInput.value === "" || secondInput.value === "") {
        error.innerHTML="<div class='alert alert-danger' role='alert'>You didn't fill in all fields!</div>";
    }
    else {
        error.innerHTML = "";

        if(secondInput.value.toUpperCase().substr(secondInput.value.length - 2, 2) === "IS") {
            basic.textContent = firstInput.value.toUpperCase();
            
            osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 2);
            var nastavciComparative = ["IOR","IOR","IUS"];
            komp.textContent = osnova + nastavciComparative[0] + ", " + nastavciComparative[1] + ", " + nastavciComparative[2];
            if(firstInput.value.toUpperCase().substr(firstInput.value.length - 2, 2) === "ER") {
                osnova = firstInput.value.toUpperCase();
                var nastavciSuperlative = ["RIMUS", "RIMA", "RIMUM"]; 
                sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
            }
            else if(osnova.substr(osnova.length - 1, 1) === "L") {
                var nastavciSuperlative = ["LIMUS","LIMA","LIMUM"];
                sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
            }
            else {
                var nastavciSuperlative = ["ISSIMUS","ISSIMA","ISSIMUM"];
                sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
            }
        }
        else if(secondInput.value.toUpperCase().substr(secondInput.value.length - 1, 1) === "I" 
        || secondInput.value.toUpperCase().substr(secondInput.value.length - 1, 1) === "E") {
            basic.textContent = firstInput.value.toUpperCase();

            osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 1);
            var nastavciComparative = ["IOR","IOR","IUS"];
            komp.textContent = osnova + nastavciComparative[0] + ", " + nastavciComparative[1] + ", " + nastavciComparative[2];
            if(firstInput.value.toUpperCase().substr(firstInput.value.length - 2, 2) === "ER") {
                osnova = firstInput.value.toUpperCase();
                var nastavciSuperlative = ["RIMUS", "RIMA", "RIMUM"]; 
                sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
            }
            else if(osnova.substr(osnova.length - 1, 1) === "L") {
                var nastavciSuperlative = ["LIMUS","LIMA","LIMUM"];
                sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
            }
            else {
                var nastavciSuperlative = ["ISSIMUS","ISSIMA","ISSIMUM"];
                sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
            }
        }
        else {
            error.innerHTML="<div class='alert alert-danger' role='alert'>You didn't fill in correct informations!</div>";
            basic.textContent = "";
            komp.textContent = "";
            sup.textContent = "";
        }
        // if(firstInput.value.toUpperCase()[firstInput.value.length-1] !== 'R' && 
        // firstInput.value.toUpperCase()[firstInput.value.length-2] !== 'E' && 
        // firstInput.value.toUpperCase()[firstInput.value.length-3] !== 'I' && 
        // firstInput.value.toUpperCase()[firstInput.value.length-1] !== 'E') {
        //     if(secondInput.value.toUpperCase()[secondInput.value.length-1] === 'S') {
        //         osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length-2);
        //     }
        //     else {
        //         osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length-1);
        //     }

        //     var nastavciComparative = ["IOR","IOR","IUS"];
        //     var nastavciSuperlative = ["ISSIMUS","ISSIMA","ISSIMUM"];
            
        //     basic.textContent = firstInput.value.toUpperCase();
        //     komp.textContent = osnova + nastavciComparative[0] + ", " + nastavciComparative[1] + ", " + nastavciComparative[2];
        //     sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
        // }
        // else if(firstInput.value.toUpperCase().substr(firstInput.value.length-4, firstInput.value.length) === "ILIS") {
            
        //     if(secondInput.value.toUpperCase()[secondInput.value.length-1] === 'S') {
        //         osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length-2);
        //     }
        //     else {
        //         osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length-1);
        //     }

        //     var nastavciComparative = ["IOR","IOR","IUS"];
        //     var nastavciSuperlative = ["LIMUS","LIMA","LIMUM"];
            
        //     basic.textContent = firstInput.value.toUpperCase();
        //     komp.textContent = osnova + nastavciComparative[0] + ", " + nastavciComparative[1] + ", " + nastavciComparative[2];
        //     sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];           
        // }
        // else {
        //     if(secondInput.value.toUpperCase()[secondInput.value.length-1] === 'S') {
        //         osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length-2);
        //     }
        //     else {
        //         osnova = firstInput.value.toUpperCase();
        //     }
            
        //     var nastavciComparative = ["IOR", "IOR", "IUS"];
        //     var nastavciSuperlative = ["RIMUS", "RIMA", "RIMUM"]; 

        //     basic.textContent = firstInput.value.toUpperCase();
        //     komp.textContent = osnova + nastavciComparative[0] + ", " + nastavciComparative[1] + ", " + nastavciComparative[2];
        //     sup.textContent = osnova + nastavciSuperlative[0] + ", " + nastavciSuperlative[1] + ", " + nastavciSuperlative[2];
        //}
    }
});

function reset() {
    error.innerHTML = "";

    basic.textContent = "";
    komp.textContent = "";
    sup.textContent = "";
   
    firstInput.value = "";
    secondInput.value = "";
}