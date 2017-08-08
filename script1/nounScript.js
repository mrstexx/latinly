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

var field = document.querySelectorAll("td");

var firstInput = document.querySelector("#firstInput");
var secondInput = document.querySelector("#secondInput");
var type = document.querySelector("#type");
var selection = document.querySelector("#selection");

var button = document.querySelector("#button");
var resetB = document.querySelector("#reset");
var error = document.querySelector("#error");

var prvaDeclination = ["A", "AE", "AE", "ARUM", "AE", "IS", "AM", "AS", "A", "AE", "A", "IS"];


resetB.addEventListener("click", function() {
    reset();
});

button.addEventListener("click", function() {

    // VALIDACIJA UNOSA

    if(firstInput.value === "" || secondInput.value === "") {
        error.innerHTML="<div class='alert alert-danger' role='alert'>You didn't fill in all fields!</div>";
    }

    // VRSTA DEKLINACIJE

    else {
        error.innerHTML = "";

//        var extension = secondInput.value.toUpperCase().substr(secondInput.value.length - 2, 2);

        if(type.value === "1. Declination") {
            Declination(firstInput.value.toUpperCase(), secondInput.value.toUpperCase(), selection.value, 1);
        }

//        extension = secondInput.value.toUpperCase().substr(secondInput.value.length - 1, 2);

        if(type.value === "2. Declination") {
            Declination(firstInput.value.toUpperCase(), secondInput.value.toUpperCase(), selection.value, 2);
        }
        
 //       extension = secondInput.value.toUpperCase().substr(secondInput.value.length - 2, 2);
        
        if(type.value === "3. Declination") {
            Declination(firstInput.value.toUpperCase(), secondInput.value.toUpperCase(), selection.value, 3);
        }

//        extension = secondInput.value.toUpperCase().substr(secondInput.value.length - 2, 2);

        if(type.value === "4. Declination") {
            Declination(firstInput.value.toUpperCase(), secondInput.value.toUpperCase(), selection.value, 4);
        }

//        extension = secondInput.value.toUpperCase().substr(secondInput.value.length - 2, 2);

        if(type.value === "5. Declination") {
            Declination(firstInput.value.toUpperCase(), secondInput.value.toUpperCase(), selection.value, 5);
        }

    }
});

// FUNKCIJA ZA DEKLINACIJE

function Declination(a1, a2, a3, broj) {

    // PRVA Declination

    if(broj === 1) {
        var osnov = a1.length - 1;
        var osnova = a1.substr(0, osnov);
        for(var i = 0; i < 12; i++) {
            field[i].textContent = osnova + prvaDeclination[i];
        }
    }

    // DRUGA Declination

    else if(broj === 2) {

        // DRUGA - Neutrum

        if(a3 === "Neutrum") {
            var osnov = a2.length - 1;
            var osnova = a2.substr(0, osnov);
            
            ns.textContent = a1;
            gs.textContent = osnova + "I";
            ds.textContent = osnova + "O";
            aks.textContent = a1;
            vs.textContent = a1;
            abs.textContent = osnova + "O";

            np.textContent = osnova + "A";
            gp.textContent = osnova + "ORUM";
            dp.textContent = osnova + "IS";
            akp.textContent = osnova + "A";
            vp.textContent = osnova + "A";
            abp.textContent = osnova + "IS";
        }

        // DRUGA - Masculinum

        else if(a3 !== "Neutrum") {

            // NASTAVAK NA -US

            if(a1.substr(a1.length - 2, 2) === "US") {
                var osnov = a2.length - 1;
                var osnova = a2.substr(0, osnov);    

                ns.textContent = a1;
                gs.textContent = osnova + "I";
                ds.textContent = osnova + "O";
                aks.textContent = osnova + "UM";
                vs.textContent = osnova + "E";
                abs.textContent = osnova + "O";
                
                np.textContent = osnova + "I";
                gp.textContent = osnova + "ORUM";
                dp.textContent = osnova + "IS";
                akp.textContent = osnova + "OS";
                vp.textContent = osnova + "I";
                abp.textContent = osnova + "IS"; 
            }

            // NASTAVAK NA -ER

            else if(a1.substr(a1.length - 2, 2) === "ER" || (a1.substr(a1.length - 2, 2) === "IR")) {
                var osnov = a2.length - 1;
                var osnova = a2.substr(0, osnov); 

                ns.textContent = a1;
                gs.textContent = osnova + "I";
                ds.textContent = osnova + "O";
                aks.textContent = osnova + "UM";
                vs.textContent = a1;
                abs.textContent = osnova + "O";
                
                np.textContent = osnova + "I";
                gp.textContent = osnova + "ORUM";
                dp.textContent = osnova + "IS";
                akp.textContent = osnova + "OS";
                vp.textContent = osnova + "I";
                abp.textContent = osnova + "IS";                                
            }
        }
    }

    // TRECA Declination

    else if(broj === 3) {
        if(a3 === "Neutrum") {
            if(a1.substr(a1.length - 2, 2) === "AL" || a1.substr(a1.length - 2, 2) === "AR" || a1.substr(a1.length - 1, 1) === "E") {
                var osnov = a2.length - 2;
                var osnova = a2.substr(0, osnov);      

                ns.textContent = a1;
                gs.textContent = a2;
                ds.textContent = a1 + "I";
                aks.textContent = a1;
                vs.textContent = a1;
                abs.textContent = a1 + "I";
                
                np.textContent = a1 + "IA";
                gp.textContent = a1 + "IUM";
                dp.textContent = a1 + "IBUS";
                akp.textContent = a1 + "IA";
                vp.textContent = a1 + "IA";
                abp.textContent = a1 + "IBUS";                         
            }
            else {
                var osnov = a2.length - 2;
                var osnova = a2.substr(0, osnov);      

                ns.textContent = a1;
                gs.textContent = osnova + "IS";
                ds.textContent = osnova + "I";
                aks.textContent = a1;
                vs.textContent = a1;
                abs.textContent = osnova + "E";
                
                np.textContent = osnova + "A";
                gp.textContent = osnova + "UM";
                dp.textContent = osnova + "IBUS";
                akp.textContent = osnova + "A";
                vp.textContent = osnova + "A";
                abp.textContent = osnova + "IBUS";
            }
        }
        else if(a3 !== "Neutrum") {
            var test1 = a1.substr(a1.length - 2, 1);
            var test2 = a1.substr(a1.length - 1, 1);

            if(test1 !== "A" && test1 !== "E" && test1 !== "I" && test1 !== "O" && test1 !== "U") {
                if(test2 !== "A" && test2 !== "E" && test2 !== "I" && test2 !== "O" && test2 !== "U") {
                    var osnov = a2.length - 2;
                    var osnova = a2.substr(0, osnov);

                    ns.textContent = a1;
                    gs.textContent = osnova + "IS";
                    ds.textContent = osnova + "I";
                    aks.textContent = osnova + "EM";
                    vs.textContent = a1;
                    abs.textContent = osnova + "E";
                    
                    np.textContent = osnova + "ES";
                    gp.textContent = osnova + "IUM";
                    dp.textContent = osnova + "IBUS";
                    akp.textContent = osnova + "ES";
                    vp.textContent = osnova + "ES";
                    abp.textContent = osnova + "IBUS";
                }
            }
            else if(a1.substr(a1.length - 2, 2) === "ES" || a1.substr(a1.length - 2, 2) === "IS") {
                var osnov = a2.length - 2;
                var osnova = a2.substr(0, osnov);

                ns.textContent = a1;
                gs.textContent = osnova + "IS";
                ds.textContent = osnova + "I";
                aks.textContent = osnova + "EM";
                vs.textContent = a1;
                abs.textContent = osnova + "E";
                    
                np.textContent = osnova + "ES";
                gp.textContent = osnova + "IUM";
                dp.textContent = osnova + "IBUS";
                akp.textContent = osnova + "ES";
                vp.textContent = osnova + "ES";
                abp.textContent = osnova + "IBUS";               
            }
            else if(a1.length === a2.length) {
                var osnov = a2.length - 2;
                var osnova = a2.substr(0, osnov); 

                ns.textContent = a1;
                gs.textContent = osnova + "IS";
                ds.textContent = osnova + "I";
                aks.textContent = osnova + "EM";
                vs.textContent = a1;
                abs.textContent = osnova + "E";
                    
                np.textContent = osnova + "ES";
                gp.textContent = osnova + "IUM";
                dp.textContent = osnova + "IBUS";
                akp.textContent = osnova + "ES";
                vp.textContent = osnova + "ES";
                abp.textContent = osnova + "IBUS";                               
            }
            else {
                var osnov = a2.length - 2;
                var osnova = a2.substr(0, osnov); 

                ns.textContent = a1;
                gs.textContent = osnova + "IS";
                ds.textContent = osnova + "I";
                aks.textContent = osnova + "EM";
                vs.textContent = a1;
                abs.textContent = osnova + "E";
                    
                np.textContent = osnova + "ES";
                gp.textContent = osnova + "UM";
                dp.textContent = osnova + "IBUS";
                akp.textContent = osnova + "ES";
                vp.textContent = osnova + "ES";
                abp.textContent = osnova + "IBUS";                               
            }
        }
    }

    // CETVRTA Declination

    else if(broj === 4) {
        if(a3 === "Neutrum") {
            var osnov = a2.length - 2;
            var osnova = a2.substr(0, osnov);

            ns.textContent = a1;
            gs.textContent = osnova + "US";
            ds.textContent = osnova + "U";
            aks.textContent = a1;
            vs.textContent = a1;
            abs.textContent = osnova + "U";
                    
            np.textContent = osnova + "UA";
            gp.textContent = osnova + "UUM";
            dp.textContent = osnova + "IBUS";
            akp.textContent = osnova + "UA";
            vp.textContent = osnova + "UA";
            abp.textContent = osnova + "IBUS"; 
        }
        else if(a3 === "Masculinum") {
            var osnov = a2.length - 2;
            var osnova = a2.substr(0, osnov);          
           
            ns.textContent = a1;
            gs.textContent = osnova + "US";
            ds.textContent = osnova + "UI";
            aks.textContent = osnova + "UM";
            vs.textContent = a1;
            abs.textContent = osnova + "U";
                    
            np.textContent = osnova + "US";
            gp.textContent = osnova + "UUM";
            dp.textContent = osnova + "IBUS";
            akp.textContent = osnova + "US";
            vp.textContent = osnova + "US";
            abp.textContent = osnova + "IBUS"; 
        }
        else if(a3 === "Femininum") {
            var osnov = a2.length - 2;
            var osnova = a2.substr(0, osnov);          
           
            ns.textContent = a1;
            gs.textContent = osnova + "US";
            ds.textContent = osnova + "UI";
            aks.textContent = osnova + "UM";
            vs.textContent = a1;
            abs.textContent = osnova + "O(I)";
                    
            np.textContent = osnova + "US";
            gp.textContent = osnova + "UUM";
            dp.textContent = osnova + "IBUS";
            akp.textContent = osnova + "OS";
            vp.textContent = osnova + "US";
            abp.textContent = osnova + "IBUS"; 
        }
    }
    
    // PETA Declination

    else if(broj === 5) {
        var osnov = a2.length - 2;
        var osnova = a2.substr(0, osnov);

        ns.textContent = a1;
        gs.textContent = a2;
        ds.textContent = a2;
        aks.textContent = osnova + "EM";
        vs.textContent = a1;
        abs.textContent = osnova + "E";
                    
        np.textContent = a1;
        gp.textContent = osnova + "ERUM";
        dp.textContent = osnova + "EBUS";
        akp.textContent = a1;
        vp.textContent = a1;
        abp.textContent = osnova + "EBUS";
    }
}

// RESET FUNCTION

function reset() {
    error.innerHTML = "";
   
    firstInput.value = "";
    secondInput.value = "";

    for(var i = 0; i < 12; i++) {
        field[i].textContent = "";
    }
}