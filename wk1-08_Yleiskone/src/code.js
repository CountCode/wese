function init() {

}

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

function asetaTulos(tulos) {
    document.getElementById("tulos").innerHTML = tulos;
}

function plus() {
    asetaTulos(haeNumero("eka") + haeNumero("toka"));
}

function kerto() {
    asetaTulos(haeNumero("eka") * haeNumero("toka"));
}

function miinus() {
    asetaTulos(haeNumero("eka") - haeNumero("toka"));
}

function jako() {
    var jakaja = haeNumero("toka");
    if (jakaja === 0) {
        alert("Nollalla ei voi jakaa");
    }
    asetaTulos(haeNumero("eka") / jakaja);
}

function celsiusFahrenheit() {
    var celsius = haeNumero("celsius");
    var fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("fahrenheit").value = Math.round(fahrenheit);
}

function fahrenheitCelsius() {
    var fahrenheit = haeNumero("fahrenheit");
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = Math.round(celsius);
}

function jalkaMetri() {
    var jalka = haeNumero("jalka");
    var metri = jalka * 0.3048;
    document.getElementById("metri").value = Math.round(metri);
}

function metriJalka() {
    var metri = haeNumero("metri");
    var jalka = metri * 3.2808;
    document.getElementById("jalka").value = Math.round(jalka);
}

function laske() {
    var lohko0 = haeNumero("luokka0");
    var lohko1 = haeNumero("luokka1");
    var lohko2 = haeNumero("luokka2");
    var lohko3 = haeNumero("luokka3");
    console.log(lohko0);
    var summa = lohko0 + lohko1 + lohko2 + lohko3;
    console.log(summa);
    document.getElementById("tulos").value = Math.round(summa);    
}