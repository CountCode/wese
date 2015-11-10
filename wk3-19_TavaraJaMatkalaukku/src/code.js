function Tavara(nimi, paino) {
    var nimi = nimi;
    var paino = paino;

    this.paino = function () {
            return paino;
        }
}

function Matkalaukku(maksimipaino) {
    var tavarat = new Array();
    var maksimipaino = maksimipaino;

    function sisaltaa(tavara) {

        for (var i = 0; i < tavarat.length; i++) {
            if (tavarat[i] === tavara) {
                return true;
            }
        }

        return false;
    }

    function paino() {

        var paino = 0;
        for (var i = 0; i < tavarat.length; i++) {
            paino += tavarat[i].paino();
        }

        return paino;
    }

    function lisaa(tavara) {

        if (!(tavara instanceof Tavara)) {
            console.log("Vääränlainen esine, ei onnistu!");
            return;
        }

        if (sisaltaa(tavara)) {
            console.log("Tavara lisätty jo, ei onnistu!");
            return;
        }

        if (paino() + tavara.paino() > maksimipaino) {
            console.log("Liian painava, ei pysty!");
            return;
        }

        tavarat.push(tavara);
    }

    return {
        sisaltaa: sisaltaa,
        paino: paino,
        lisaa: lisaa
    };

}
// testikoodi:
var kivi = new Tavara("kivi", 3);
// console.log(kivi instanceof Tavara);
var kirja = new Tavara("kirja", 7);
var pumpuli = new Tavara("pumpuli", 0.001);

var laukku = new Matkalaukku(10);
var vuitton = new Matkalaukku(3);



laukku.lisaa(kivi);
console.log("laukun paino, pitäisi olla 3: " + laukku.paino());
laukku.lisaa(kivi); // virhe: "Tavara lisätty jo, ei onnistu!"

laukku.lisaa(kirja);
console.log("laukun paino, pitäisi olla 10: " + laukku.paino());

laukku.lisaa(pumpuli); // virhe: "Liian painava, ei pysty!"

console.log("laukun paino, pitäisi olla 10: " + laukku.paino());


vuitton.lisaa(pumpuli);
console.log("vuittonin paino, pitäisi olla 0.001: " + vuitton.paino());

// seuraavien komentojen ei pitäisi toimia yhdessä
pumpuli.paino = 300; // jos tavaralla on metodi paino, tämä rikkoo ohjelman seuraavassa, muuten ei
console.log("vuittonin paino, pitäisi olla vieläkin 0.001: " + vuitton.paino()); // paino ei ole muuttunut
