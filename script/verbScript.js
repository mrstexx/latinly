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

// NASTAVCI PREZENT
// AKTIV
var nastavciPrvePrezent = ["O","AMUS","AS","ATIS","AT","ANT"];
var nastavciDrugePrezent = ["EO","EMUS","ES","ETIS","ET","ENT"];
var nastavciTrecePrezent = ["O","IMUS","IS","ITIS","IT","UNT"];
var nastavciCetvrtePrezent = ["IO","IMUS","IS","ITIS","IT","IUNT"];
// PASIV
var nastavciPrvePrezentPasiv = ["OR", "AMUR", "ARIS", "AMINI", "ATUR", "ANTUR"];
var nastavciDrugePrezentPasiv = ["OR", "EMUR", "ERIS", "EMINI", "ETUR", "ENTUR"];
var nastavciTrecePrezentPasiv = ["OR", "IMUR", "ERIS", "IMINI", "ITUR", "UNTUR"];
var nastavciCetvrtePrezentPasiv = ["IOR", "IMUR", "IRIS", "IMINI", "ITUR", "IUNTUR"];


// NASTAVCI PERFEKAT
// AKTIV
var nastavciPerfekt = ["I","IMUS","ISTI","ISTIS","IT","ERUNT"];
// PASIV
var nastavciPerfektPasiv = ["US", "I", "A", "AE", "UM", "A"];
var glagolBitiPrezent = ["SUM", "SUMUS", "ES", "ESTIS", "EST", "SUNT"];


// NASTAVCI IMPERFEKAT
// AKTIV
var nastavciPrveImperfekt = ["ABAM","ABAMUS","ABAS","ABATIS","ABAT","ABANT"];
var nastavciDrugeImperfekt = ["EBAM","EBAMUS","EBAS","EBATIS","EBAT","EBANT"];
var nastavciTreceImperfekt = ["EBAM","EBAMUS","EBAS","EBATIS","EBAT","EBANT"];
var nastavciCetvrteImperfekt = ["IEBAM","IEBAMUS","IEBAS","IEBATIS","IEBAT","IEBANT"];
// PASIV
var nastavciPrveImperfekatPasiv = ["ABAR", "ABAMUR", "ABARIS", "ABAMINI", "ABATUR", "ABANTUR"];
var nastavciDrugeImperfekatPasiv = ["EBAR", "EBAMUR", "EBARIS", "EBAMINI", "EBATUR", "EBANTUR"];
var nastavciTreceImperfekatPasiv = ["EBAR", "EBAMUR", "EBARIS", "EBAMINI", "EBATUR", "EBANTUR"];
var nastavciCetvrteImperfekatPasiv = ["IEBAR", "IEBAMUR", "IEBARIS", "IEBAMINI", "IEBATUR", "IEBANTUR"];


// NASTAVCI FUTUR I
// AKTIV
var nastavciPrveFutur1 = ["ABO","ABIMUS","ABIS","ABITIS","ABIT","ABUNT"];
var nastavciDrugeFutur1 = ["EBO","EBIMUS","EBIS","EBITIS","EBIT","EBUNT"];
var nastavciTreceFutur1 = ["AM","EMUS","ES","ETIS","ET","ENT"];
var nastavciCetvrteFutur1 = ["IAM","IEMUS","IES","IETIS","IET","IENT"];
// PASIV 
var nastavciPrveFutur1Pasiv = ["ABOR", "ABIMUR", "ABERIS", "ABIMINI", "ABITUR", "ABUNTUR"];
var nastavciDrugeFutur1Pasiv = ["EBOR", "EBIMUR", "EBERIS", "EBIMINI", "EBITUR", "EBUNTUR"];
var nastavciTreceFutur1Pasiv = ["AR", "EMUR", "ERIS", "EMINI", "ETUR", "ENTUR"];
var nastavciCetvrteFutur1Pasiv = ["IAR", "IEMUR", "IERIS", "IEMINI", "IETUR", "IENTUR"];


// NASTAVCI FUTUR II
// AKTIV
var nastavciFutur2 = ["ERO","ERIMUS","ERIS","ERITIS","ERIT","ERINT"];
// PASIV
var glagolBitiFutur2 = ["ERO", "ERIMUS", "ERIS", "ERITIS", "ERIT", "ERUNT"]; 


// NASTAVCI PLUSKVAMPERFEKAT
// AKTIV
var nastavciPlusvamperfekt = ["ERAM","ERAMUS","ERAS","ERATIS","ERAT","ERANT"];
// PASIV
var glagolBitiPluskvamperfekat = ["ERAM","ERAMUS","ERAS","ERATIS","ERAT","ERANT"];

// --------------------------------------------------------------------------------------------------

// RESET BUTTON

resetB.addEventListener("click", function() {
    reset();
});

// PREZENTSKA OSNOVA

function presentBases() {
    var osnova = secondInput.value.toUpperCase().substr(0, secondInput.value.length-3);
    return osnova;
}

// PERFEKATSKA OSNOVA 

function perfectBases() {
    var osnova = thirdInput.value.toUpperCase().substr(0, thirdInput.value.length-1);
    return osnova;
}

// PARTICIP PERFEKTA PASIVNOG OSNOVA 

function passiveBases() {
    var osnova = fourthInput.value.toUpperCase().substr(0, fourthInput.value.length-2);
    return osnova;
}

// --------------------------------------------------------------------------------------------------

// PROMJENA GLAGOLA BUTTON

button.addEventListener("click", function() {
    if(firstInput.value === "" || secondInput.value === "" || thirdInput.value === "" || fourthInput.value ==="") {
        error.innerHTML = "<div class='alert alert-danger' role='alert'>Niste popunili sva polja!</div>";
    }
    else {
        error.innerHTML = "";

        if(number.value === "1. Konjugacija") {
            if(type.value === "Aktiv") {
                if(time.value === "Prezent") {
                    presentActive(1, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectActive(1, presentBases());
                }
                else if(time.value === "Futur I") {
                    futur1Active(1, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Active(perfectBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectActive(perfectBases());
                }
            }

            else if (type.value === "Pasiv") {
                if(time.value === "Prezent") {
                    presentPassive(1, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectPassive(1, presentBases());
                }
                else if(time.value === "Futur I") {
                    futur1Passive(1, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Passive(passiveBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectPassive(passiveBases());
                }
            }            
        }
        else if(number.value === "2. Konjugacija") {
            if(type.value === "Aktiv") {
                if(time.value === "Prezent") {
                    presentActive(2, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectActive(2, presentBases());
                }         
                else if(time.value === "Futur I") {
                    futur1Active(2, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Active(perfectBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectActive(perfectBases());
                }   
            }
            else if (type.value === "Pasiv") {
                if(time.value === "Prezent") {
                    presentPassive(2, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectPassive(2, presentBases());
                }
                else if(time.value === "Futur I") {
                    futur1Passive(2, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Passive(passiveBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectPassive(passiveBases());
                }
            }
        }
        else if(number.value === "3. Konjugacija") {
            if(type.value === "Aktiv") {
                if(time.value === "Prezent") {
                    presentActive(3, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectActive(3, presentBases());
                }
                else if(time.value === "Futur I") {
                    futur1Active(3, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Active(perfectBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectActive(perfectBases());
                }
            }
            else if (type.value === "Pasiv") {
                if(time.value === "Prezent") {
                    presentPassive(3, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectPassive(3, presentBases());
                }
                else if(time.value === "Futur I") {
                    futur1Passive(3, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Passive(passiveBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectPassive(passiveBases());
                }
            }
        }
        else if(number.value === "4. Konjugacija") {
            if(type.value === "Aktiv") {
                if(time.value === "Prezent") {
                    presentActive(4, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectActive(perfectBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectActive(4, presentBases());
                }
                else if(time.value === "Futur I") {
                    futur1Active(4, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Active(perfectBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectActive(perfectBases());
                }
            }
            else if (type.value === "Pasiv") {
                if(time.value === "Prezent") {
                    presentPassive(4, presentBases());
                }
                else if(time.value === "Perfekt") {
                    perfectPassive(passiveBases());
                }
                else if(time.value === "Imperfekat") {
                    imperfectPassive(4, presentBases());
                }
                else if(time.value === "Futur I") {
                    futur1Passive(4, presentBases());
                }
                else if(time.value === "Futur II") {
                    futur2Passive(passiveBases());
                }
                else if(time.value === "Pluskvamperfekat") {
                    pluskvamperfectPassive(passiveBases());
                }
            }
        }
    }
});

// --------------------------------------------------------------------------------------------------

// FUNKCIJA: PREZENT AKTIVNI

function presentActive(konjugacija, bases) {
    if(konjugacija === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrvePrezent[i];
        }
    }
    else if(konjugacija === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugePrezent[i];
        }
    }
    else if(konjugacija === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTrecePrezent[i];
        }
    }
    else if(konjugacija ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrtePrezent[i];
        }
    }
}

// FUNKCIJA: PERFEKT AKTIVNI

function perfectActive(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciPerfekt[i];
    } 
}

// FUNKCIJA: IMPERFEKAT AKTIVNI

function imperfectActive(konjugacija, bases) {
    if(konjugacija === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveImperfekt[i];
        }
    }
    else if(konjugacija === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeImperfekt[i];
        }
    }
    else if(konjugacija === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceImperfekt[i];
        }
    }
    else if(konjugacija ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteImperfekt[i];
        }
    }
}

// FUNKCIJA: FUTUR I AKTIVNI

function futur1Active(konjugacija, bases) {
    if(konjugacija === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveFutur1[i];
        }
    }
    else if(konjugacija === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeFutur1[i];
        }
    }
    else if(konjugacija === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceFutur1[i];
        }
    }
    else if(konjugacija ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteFutur1[i];
        }
    }  
}

// FUNKCIJA: FUTUR II AKTIVNI

function futur2Active(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciFutur2[i];
    }
}

// FUNKCIJA: PLUSKVAMPERFEKAT AKTIVNI

function pluskvamperfectActive(bases) {
    for(var i = 0; i < 6; i++) {
        field[i].textContent = bases + nastavciPlusvamperfekt[i];
    }   
}

// FUNKCIJA: PREZENT PASIVNI

function presentPassive(konjugacija, bases) {
    if(konjugacija === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrvePrezentPasiv[i];
        }
    }
    else if(konjugacija === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugePrezentPasiv[i];
        }
    }
    else if(konjugacija === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTrecePrezentPasiv[i];
        }
    }
    else if(konjugacija ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrtePrezentPasiv[i];
        }
    }  
}

// FUNKCIJA: PERFEKAT PASIVNI

function perfectPassive(bases) {
    for(var i = 0; i < 5; i+=2) {
        field[i].textContent = bases + nastavciPerfektPasiv[0] + ", " + nastavciPerfektPasiv[2] + ", " + nastavciPerfektPasiv[4] + " " + glagolBitiPrezent[i];
    }
    for(var i = 1; i < 6; i+=2) {
        field[i].textContent = bases + nastavciPerfektPasiv[1] + ", " + nastavciPerfektPasiv[3] + ", " + nastavciPerfektPasiv[5] + " " + glagolBitiPrezent[i];
    }
}

// FUNKCIJA: IMPERFEKAT PASIVNI

function imperfectPassive(konjugacija, bases) {
    if(konjugacija === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveImperfekatPasiv[i];
        }
    }
    else if(konjugacija === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeImperfekatPasiv[i];
        }
    }
    else if(konjugacija === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceImperfekatPasiv[i];
        }
    }
    else if(konjugacija ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteImperfekatPasiv[i];
        }
    }    
}

// FUNKCIJA: FUTUR I PASIVNI

function futur1Passive(konjugacija, bases) {
    if(konjugacija === 1) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciPrveFutur1Pasiv[i];
        }
    }
    else if(konjugacija === 2) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciDrugeFutur1Pasiv[i];
        }
    }
    else if(konjugacija === 3) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciTreceFutur1Pasiv[i];
        }
    }
    else if(konjugacija ===4) {
        for(var i = 0; i < 6; i++) {
            field[i].textContent = bases + nastavciCetvrteFutur1Pasiv[i];
        }
    }    
}

// FUNKCIJA: FUTUR II PASIVNI

function futur2Passive(bases) {
    for(var i = 0; i < 5; i+=2) {
        field[i].textContent = bases + nastavciPerfektPasiv[0] + ", " + nastavciPerfektPasiv[2] + ", " + nastavciPerfektPasiv[4] + " " + glagolBitiFutur2[i];
    }
    for(var i = 1; i < 6; i+=2) {
        field[i].textContent = bases + nastavciPerfektPasiv[1] + ", " + nastavciPerfektPasiv[3] + ", " + nastavciPerfektPasiv[5] + " " + glagolBitiFutur2[i];
    }
}

// FUNKCIJA: PLUSKVAMPERFEKAT PASIVNI

function pluskvamperfectPassive(bases) {
    for(var i = 0; i < 5; i+=2) {
        field[i].textContent = bases + nastavciPerfektPasiv[0] + ", " + nastavciPerfektPasiv[2] + ", " + nastavciPerfektPasiv[4] + " " + glagolBitiPluskvamperfekat[i];
    }
    for(var i = 1; i < 6; i+=2) {
        field[i].textContent = bases + nastavciPerfektPasiv[1] + ", " + nastavciPerfektPasiv[3] + ", " + nastavciPerfektPasiv[5] + " " + glagolBitiPluskvamperfekat[i];
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