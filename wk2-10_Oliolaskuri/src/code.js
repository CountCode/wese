var laskin = new Laskin(0);

function init() {
    var link = document.querySelector("#nappi");
    link.addEventListener('click', handleLinkClick, false);
}


function handleLinkClick(eventInformation) {
    var origin = eventInformation.target;

    laskin.kasvata();
    var kerrat = laskin.annaLuku();
    document.getElementById("laskuri").innerHTML = kerrat;
    // kielletään selainta tekemästä oletustoiminto (siirtyminen)
    eventInformation.preventDefault();
}


function Laskin(nimi) {
    this.luku = nimi;

}

Laskin.prototype.kasvata = function () {
    this.luku++;
};

Laskin.prototype.annaLuku = function () {
    return this.luku;
};