function init() {

}

function init() {
    displaySection(0);
}

function displaySection(index) {
    var sections = document.getElementsByTagName("section");

    for(var i = 0; i < sections.length; i++) {
        if (index == i) {
            sections[i].className='';
        } else {
            sections[i].className='hidden';
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
    if (jakaja===0) {
        alert("Nollalla ei voi jakaa");
    }
    asetaTulos(haeNumero("eka") / jakaja);
}