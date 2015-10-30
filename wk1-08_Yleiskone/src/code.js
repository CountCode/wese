var likes = 0;

function init() {
    displaySection(0);
}

function displaySection(index) {
    var sections = document.getElementsByTagName("section");

    for (var i = 0; i < sections.length; i++) {
        if (index == i) {
            sections[i].className = '';
        } else {
            sections[i].className = 'hidden';
        }
    }
}

function haeNumero(tunnus) {
    return parseInt(document.getElementById(tunnus).value);
}

function celsiusFahrenheit() {
    var celsius = haeNumero("celsius");
    var fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("fahrenheit").value = Math.round(fahrenheit*10)/10;
}

function fahrenheitCelsius() {
    var fahrenheit = haeNumero("fahrenheit");
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = Math.round(celsius*10)/10;
}

function jalkaMetri() {
    var jalka = haeNumero("jalka");
    var metri = jalka * 0.3048;
    document.getElementById("metri").value = Math.round(metri*100)/100;
}

function metriJalka() {
    var metri = haeNumero("metri");
    var jalka = metri * 3.2808;
    document.getElementById("jalka").value = Math.round(jalka*100)/100;
}

function laske() {
    var lohko0 = haeNumero("luokka0");
    var lohko1 = haeNumero("luokka1");
    var lohko2 = haeNumero("luokka2");
    var lohko3 = haeNumero("luokka3");
    var kerroin1 = 1.5;
    var kerroin2 = 3;
    var kerroin3 = 3;
    console.log(lohko0);
    var summa = lohko0 + kerroin1*lohko1 + kerroin2*lohko2 + kerroin3*lohko3;
    console.log(summa);
    document.getElementById("yhteensa").value = Math.round(summa*10)/10;     
}

    function tykkaa() {
        likes = likes + 1;
        document.getElementById("likes").innerHTML = likes;
    };