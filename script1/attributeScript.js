var ns = document.getElementById("ns");
var np = document.getElementById("np");

var gs = document.getElementById("gs");
var gp = document.getElementById("gp");

var ds = document.getElementById("ds");
var dp = document.getElementById("dp");

var aks = document.getElementById("aks");
var akp = document.getElementById("akp");

var vs = document.getElementById("vs");
var vp = document.getElementById("vp");

var abs = document.getElementById("abs");
var abp = document.getElementById("abp");

var firstInput = document.querySelector("#firstInput");
var secondInput = document.querySelector("#secondInput");
var thirdInput = document.querySelector("#thirdInput");
var selection = document.querySelector("#selection");

var button = document.querySelector("#button");
var resetB = document.querySelector("#reset");
var error = document.querySelector("#error");

var field = document.querySelectorAll("td");

resetB.addEventListener("click", function() {
    reset();
});

button.addEventListener("click", function() {
    if(firstInput.value === "" || secondInput.value === "" || thirdInput.value === "") {
        error.innerHTML="<div class='alert alert-danger' role='alert'>You didn't fill in all fields!</div>";
    }
    else {
        error.innerHTML = "";

        if(selection.value === "Neutrum") {
            if(thirdInput.value.toUpperCase().substr(thirdInput.value.length - 2, 2) === "UM") {
                
                var osnovniOblik = thirdInput.value.toUpperCase();
                var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 1);
                
                ns.textContent = osnovniOblik;
                gs.textContent = osnova + "I";
                ds.textContent = osnova + "O";
                aks.textContent = osnova + "UM";
                vs.textContent = osnova + "UM";
                abs.textContent = osnova + "O";
                            
                np.textContent = osnova + "A";
                gp.textContent = osnova + "ORUM";
                dp.textContent = osnova + "IS";
                akp.textContent = osnova + "A";
                vp.textContent = osnova + "A";
                abp.textContent = osnova + "IS";
            }
            else {
                var osnovniOblik = firstInput.value.toUpperCase();
                var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 2);

                ns.textContent = osnovniOblik;
                gs.textContent = osnova + "IS";
                ds.textContent = osnova + "I";
                aks.textContent = osnovniOblik;
                vs.textContent = osnovniOblik;
                abs.textContent = osnova + "I";
                            
                np.textContent = osnova + "IA";
                gp.textContent = osnova + "IUM";
                dp.textContent = osnova + "IBUS";
                akp.textContent = osnova + "IA";
                vp.textContent = osnova + "IA";
                abp.textContent = osnova + "IBUS";
            }
        }
        else if(selection.value === "Masculinum"){
            if(firstInput.value.toUpperCase().substr(firstInput.value.length - 2, 2) === "ER" &&
            secondInput.value.toUpperCase().substr(secondInput.value.length - 2, 2) !== "IS") {
                
                var osnovniOblik = firstInput.value.toUpperCase();
                var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 1);

                ns.textContent = osnovniOblik;
                gs.textContent = osnova + "I";
                ds.textContent = osnova + "O";
                aks.textContent = osnova + "UM";
                vs.textContent = osnovniOblik;
                abs.textContent = osnova + "O";
                            
                np.textContent = osnova  + "I";
                gp.textContent = osnova + "ORUM";
                dp.textContent = osnova + "IS";
                akp.textContent = osnova + "OS";
                vp.textContent = osnova + "I";
                abp.textContent = osnova + "IS";
            }

            else if(firstInput.value.toUpperCase().substr(firstInput.value.length - 2, 2) === "US") {
                
                var osnovniOblik = firstInput.value.toUpperCase();
                var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 1);

                ns.textContent = osnovniOblik;
                gs.textContent = osnova + "I";
                ds.textContent = osnova + "O";
                aks.textContent = osnova + "UM";
                vs.textContent = osnova + "E";
                abs.textContent = osnova + "O";
                            
                np.textContent = osnova  + "I";
                gp.textContent = osnova + "ORUM";
                dp.textContent = osnova + "IS";
                akp.textContent = osnova + "OS";
                vp.textContent = osnova + "I";
                abp.textContent = osnova + "IS";
            }

            else {
                var osnovniOblik = firstInput.value.toUpperCase();
                var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 2);

                ns.textContent = osnovniOblik;
                gs.textContent = osnova + "IS";
                ds.textContent = osnova + "I";
                aks.textContent = osnova + "EM";
                vs.textContent = osnovniOblik;
                abs.textContent = osnova + "I";
                            
                np.textContent = osnova + "ES";
                gp.textContent = osnova + "IUM";
                dp.textContent = osnova + "IBUS";
                akp.textContent = osnova + "ES";
                vp.textContent = osnova + "ES";
                abp.textContent = osnova + "IBUS";
            }
        }
        else if(selection.value === "Femininum") {
            if(secondInput.value.toUpperCase().substr(secondInput.value.length - 2, 2) === "IS") {

                var osnovniOblik = firstInput.value.toUpperCase();
                var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 2);

                ns.textContent = osnovniOblik;
                gs.textContent = osnova + "IS";
                ds.textContent = osnova + "I";
                aks.textContent = osnova + "EM";
                vs.textContent = osnovniOblik;
                abs.textContent = osnova + "I";
                            
                np.textContent = osnova + "ES";
                gp.textContent = osnova + "IUM";
                dp.textContent = osnova + "IBUS";
                akp.textContent = osnova + "ES";
                vp.textContent = osnova + "ES";
                abp.textContent = osnova + "IBUS";
            }
            else if(secondInput.value.toUpperCase().substr(secondInput.value.length - 1, 1) === "A") {
                
                var osnovniOblik = secondInput.value.toUpperCase().substr(0, secondInput.value.length - 1);
                
                ns.textContent = osnovniOblik + "A";
                gs.textContent = osnovniOblik + "AE";
                ds.textContent = osnovniOblik + "AE";
                aks.textContent = osnovniOblik + "AM";
                vs.textContent = osnovniOblik + "A";
                abs.textContent = osnovniOblik + "A";
                            
                np.textContent = osnovniOblik + "AE";
                gp.textContent = osnovniOblik + "ARUM";
                dp.textContent = osnovniOblik + "IS";
                akp.textContent = osnovniOblik + "AS";
                vp.textContent = osnovniOblik + "AE";
                abp.textContent = osnovniOblik + "IS";
            }
        }
    }
});

function reset() {
    error.innerHTML = "";
   
    firstInput.value = "";
    secondInput.value = "";
    thirdInput.value = "";

    for(var i = 0; i < 12; i++) {
        field[i].textContent = "";
    }
}