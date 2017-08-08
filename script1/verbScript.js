var field = document.querySelectorAll("td");

var firstInput = document.querySelector("#firstInput");
var secondInput = document.querySelector("#secondInput");
var thirdInput = document.querySelector("#thirdInput");
var fourthInput = document.querySelector("#fourthInput");

var button = document.querySelector("#button");
var resetB = document.querySelector("#reset");

var number = document.querySelector("#number");
var type = document.querySelector("#type");
var time = document.querySelector("#time");

var error = document.querySelector("#error");

// --------------------------------------------------------------------------------------------------

// NASTAVCI Present
// Active
var nastavciPrvePresent = ["O","AMUS","AS","ATIS","AT","ANT"];
var nastavciDrugePresent = ["EO","EMUS","ES","ETIS","ET","ENT"];
var nastavciTrecePresent = ["O","IMUS","IS","ITIS","IT","UNT"];
var nastavciCetvrtePresent = ["IO","IMUS","IS","ITIS","IT","IUNT"];
// Pasive
var nastavciPrvePresentPasive = ["OR", "AMUR", "ARIS", "AMINI", "ATUR", "ANTUR"];
var nastavciDrugePresentPasive = ["OR", "EMUR", "ERIS", "EMINI", "ETUR", "ENTUR"];
var nastavciTrecePresentPasive = ["OR", "IMUR", "ERIS", "IMINI", "ITUR", "UNTUR"];
var nastavciCetvrtePresentPasive = ["IOR", "IMUR", "IRIS", "IMINI", "ITUR", "IUNTUR"];


// NASTAVCI PERFEKAT
// Active
var nastavciPerfect = ["I","IMUS","ISTI","ISTIS","IT","ERUNT"];
// Pasive
var nastavciPerfectPasive = ["US", "I", "A", "AE", "UM", "A"];
var glagolBitiPresent = ["SUM", "SUMUS", "ES", "ESTIS", "EST", "SUNT"];


// NASTAVCI Imperfect
// Active
var nastavciPrveImPerfect = ["ABAM","ABAMUS","ABAS","ABATIS","ABAT","ABANT"];
var nastavciDrugeImPerfect = ["EBAM","EBAMUS","EBAS","EBATIS","EBAT","EBANT"];
var nastavciTreceImPerfect = ["EBAM","EBAMUS","EBAS","EBATIS","EBAT","EBANT"];
var nastavciCetvrteImPerfect = ["IEBAM","IEBAMUS","IEBAS","IEBATIS","IEBAT","IEBANT"];
// Pasive
var nastavciPrveImperfectPasive = ["ABAR", "ABAMUR", "ABARIS", "ABAMINI", "ABATUR", "ABANTUR"];
var nastavciDrugeImperfectPasive = ["EBAR", "EBAMUR", "EBARIS", "EBAMINI", "EBATUR", "EBANTUR"];
var nastavciTreceImperfectPasive = ["EBAR", "EBAMUR", "EBARIS", "EBAMINI", "EBATUR", "EBANTUR"];
var nastavciCetvrteImperfectPasive = ["IEBAR", "IEBAMUR", "IEBARIS", "IEBAMINI", "IEBATUR", "IEBANTUR"];


// NASTAVCI Future I
// Active
var nastavciPrveFuture1 = ["ABO","ABIMUS","ABIS","ABITIS","ABIT","ABUNT"];
var nastavciDrugeFuture1 = ["EBO","EBIMUS","EBIS","EBITIS","EBIT","EBUNT"];
var nastavciTreceFuture1 = ["AM","EMUS","ES","ETIS","ET","ENT"];
var nastavciCetvrteFuture1 = ["IAM","IEMUS","IES","IETIS","IET","IENT"];
// Pasive 
var nastavciPrveFuture1Pasive = ["ABOR", "ABIMUR", "ABERIS", "ABIMINI", "ABITUR", "ABUNTUR"];
var nastavciDrugeFuture1Pasive = ["EBOR", "EBIMUR", "EBERIS", "EBIMINI", "EBITUR", "EBUNTUR"];
var nastavciTreceFuture1Pasive = ["AR", "EMUR", "ERIS", "EMINI", "ETUR", "ENTUR"];
var nastavciCetvrteFuture1Pasive = ["IAR", "IEMUR", "IERIS", "IEMINI", "IETUR", "IENTUR"];


// NASTAVCI Future II
// Active
var nastavciFuture2 = ["ERO","ERIMUS","ERIS","ERITIS","ERIT","ERINT"];
// Pasive
var glagolBitiFuture2 = ["ERO", "ERIMUS", "ERIS", "ERITIS", "ERIT", "ERUNT"]; 


// NASTAVCI Plueperfect
// Active
var nastavciPlusvamPerfect = ["ERAM","ERAMUS","ERAS","ERATIS","ERAT","ERANT"];
// Pasive
var glagolBitiPlueperfect = ["ERAM","ERAMUS","ERAS","ERATIS","ERAT","ERANT"];

// --------------------------------------------------------------------------------------------------

// RESET BUTTON

resetB.addEventListener("click", function() {
    reset();
});

// PresentSKA OSNOVA

function presentBases() {
    var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length-3);
    return osnova;
}

// PERFEKATSKA OSNOVA 

function perfectBases() {
    var osnova = thirdInput.value.toUpperCase().substr(0, thirdInput.value.length-1);
    return osnova;
}

// PARTICIP PerfectA PasiveNOG OSNOVA 

function passiveBases() {
    var osnova = fourthInput.value.toUpperCase().substr(0, fourthInput.value.length-2);
    return osnova;
}

// --------------------------------------------------------------------------------------------------

// Conjugate BUTTON

button.addEventListener("click", function() {
    if(firstInput.value === "" || secondInput.value === "" || thirdInput.value === "" || fourthInput.value ==="") {
        error.innerHTML = "<div class='alert alert-danger' role='alert'>You didn't fill in all fields!</div>";
    }
    else {
        error.innerHTML = "";

        if(number.value === "1. Conjugation") {
            if(type.value === "Active") {
                if(time.value === "Present") {
                    presentActive(1, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectActive(1, presentBases());
                }
                else if(time.value === "Future I") {
                    Future1Active(1, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Active(perfectBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectActive(perfectBases());
                }
            }

            else if (type.value === "Pasive") {
                if(time.value === "Present") {
                    presentPassive(1, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectPassive(1, presentBases());
                }
                else if(time.value === "Future I") {
                    Future1Passive(1, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Passive(passiveBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectPassive(passiveBases());
                }
            }            
        }
        else if(number.value === "2. Conjugation") {
            if(type.value === "Active") {
                if(time.value === "Present") {
                    presentActive(2, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectActive(2, presentBases());
                }         
                else if(time.value === "Future I") {
                    Future1Active(2, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Active(perfectBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectActive(perfectBases());
                }   
            }
            else if (type.value === "Pasive") {
                if(time.value === "Present") {
                    presentPassive(2, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectPassive(2, presentBases());
                }
                else if(time.value === "Future I") {
                    Future1Passive(2, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Passive(passiveBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectPassive(passiveBases());
                }
            }
        }
        else if(number.value === "3. Conjugation") {
            if(type.value === "Active") {
                if(time.value === "Present") {
                    presentActive(3, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectActive(3, presentBases());
                }
                else if(time.value === "Future I") {
                    Future1Active(3, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Active(perfectBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectActive(perfectBases());
                }
            }
            else if (type.value === "Pasive") {
                if(time.value === "Present") {
                    presentPassive(3, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectPassive(3, presentBases());
                }
                else if(time.value === "Future I") {
                    Future1Passive(3, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Passive(passiveBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectPassive(passiveBases());
                }
            }
        }
        else if(number.value === "4. Conjugation") {
            if(type.value === "Active") {
                if(time.value === "Present") {
                    presentActive(4, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectActive(4, presentBases());
                }
                else if(time.value === "Future I") {
                    Future1Active(4, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Active(perfectBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectActive(perfectBases());
                }
            }
            else if (type.value === "Pasive") {
                if(time.value === "Present") {
                    presentPassive(4, presentBases());
                }
                else if(time.value === "Perfect") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfect") {
                    imperfectPassive(4, presentBases());
                }
                else if(time.value === "Future I") {
                    Future1Passive(4, presentBases());
                }
                else if(time.value === "Future II") {
                    Future2Passive(passiveBases());
                }
                else if(time.value === "Plueperfect") {
                    pluskvamperfectPassive(passiveBases());
                }
            }
        }
    }
});

// --------------------------------------------------------------------------------------------------

// FUNKCIJA: Present ActiveNI

function presentActive(Conjugation, bases) {
    if(Conjugation === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrvePresent[i];
        }
    }
    else if(Conjugation === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugePresent[i];
        }
    }
    else if(Conjugation === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTrecePresent[i];
        }
    }
    else if(Conjugation ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrtePresent[i];
        }
    }
}

// FUNKCIJA: Perfect ActiveNI

function perfectActive(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciPerfect[i];
    } 
}

// FUNKCIJA: Imperfect ActiveNI

function imperfectActive(Conjugation, bases) {
    if(Conjugation === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveImPerfect[i];
        }
    }
    else if(Conjugation === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeImPerfect[i];
        }
    }
    else if(Conjugation === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceImPerfect[i];
        }
    }
    else if(Conjugation ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteImPerfect[i];
        }
    }
}

// FUNKCIJA: Future I ActiveNI

function Future1Active(Conjugation, bases) {
    if(Conjugation === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveFuture1[i];
        }
    }
    else if(Conjugation === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeFuture1[i];
        }
    }
    else if(Conjugation === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceFuture1[i];
        }
    }
    else if(Conjugation ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteFuture1[i];
        }
    }  
}

// FUNKCIJA: Future II ActiveNI

function Future2Active(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciFuture2[i];
    }
}

// FUNKCIJA: Plueperfect ActiveNI

function pluskvamperfectActive(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciPlusvamPerfect[i];
    }   
}

// FUNKCIJA: Present PasiveNI

function presentPassive(Conjugation, bases) {
    if(Conjugation === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrvePresentPasive[i];
        }
    }
    else if(Conjugation === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugePresentPasive[i];
        }
    }
    else if(Conjugation === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTrecePresentPasive[i];
        }
    }
    else if(Conjugation ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrtePresentPasive[i];
        }
    }  
}

// FUNKCIJA: PERFEKAT PasiveNI

function perfectPassive(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciPerfectPasive[i] + " " + glagolBitiPresent[i];
    }
}

// FUNKCIJA: Imperfect PasiveNI

function imperfectPassive(Conjugation, bases) {
    if(Conjugation === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveImperfectPasive[i];
        }
    }
    else if(Conjugation === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeImperfectPasive[i];
        }
    }
    else if(Conjugation === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceImperfectPasive[i];
        }
    }
    else if(Conjugation ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteImperfectPasive[i];
        }
    }    
}

// FUNKCIJA: Future I PasiveNI

function Future1Passive(Conjugation, bases) {
    if(Conjugation === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveFuture1Pasive[i];
        }
    }
    else if(Conjugation === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeFuture1Pasive[i];
        }
    }
    else if(Conjugation === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceFuture1Pasive[i];
        }
    }
    else if(Conjugation ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteFuture1Pasive[i];
        }
    }    
}

// FUNKCIJA: Future II PasiveNI

function Future2Passive(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciPerfectPasive[i] + " " + glagolBitiFuture2[i];
    }
}

// FUNKCIJA: Plueperfect PasiveNI

function pluskvamperfectPassive(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciPerfectPasive[i] + " " + glagolBitiPlueperfect[i];
    }
}

// RESET FUNCTION

function reset() {
    error.innerHTML = "";
   
    firstInput.value = "";
    secondInput.value = "";
    thirdInput.value = "";
    fourthInput.value = "";

    for(var i = 0; i<6; i++) {
        field[i].textContent = "";
    }
}