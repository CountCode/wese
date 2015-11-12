var myDate = /((19|20)[0-9]{2})-([0][1-9]|[1][0-2])-([0][1-9]|[1-2][0-9]|[3][0-1])$/;

/* Date regular expression tester:
 var date = "2099-12-31";
 if (myDate.test(date)) console.log("OK!") ;
 else console.log("ERROR!");
 */

var muistutus = {};
muistutus.view = {};

muistutus.view.Listaus = function (elementti) {

    // julkiset metodit
    this.listaaTapahtumat = function (tapahtumat) {
        tyhjenna();

        for (var i = 0; i < tapahtumat.length; i++) {
            lisaaTapahtuma(tapahtumat[i]);
        }
    }

    this.paivita = function (tapahtumat) {
        this.listaaTapahtumat(tapahtumat);
    }

    // apufunktiot
    function lisaaTapahtuma(tapahtuma) {
        var tapahtumaElementti = document.createElement("h2");
        var teksti = tapahtuma.nimi + ' (' + tapahtuma.aika + ')';

        tapahtumaElementti.appendChild(document.createTextNode(teksti));
        elementti.appendChild(tapahtumaElementti);
    }

    function tyhjenna() {
        while (elementti.firstChild) {
            elementti.removeChild(elementti.firstChild);
        }
    }
}

muistutus.domain = {};
muistutus.domain.Tapahtumalista = function (view) {
    var tapahtumat = [];

    this.lisaaTapahtuma = function (tapahtuma) {
        tapahtumat.push(tapahtuma);
        view.paivita(tapahtumat);
    }

    this.annaTapahtumat = function () {
        return tapahtumat;
    }
}

muistutus.controller = {};

muistutus.controller.LomakeKontrolli = function (model) {
    var elementit = {};

    var nimiValidoija = new Validoija("nimi", function (data) {
        console.log("nimi validoija");
        if (!data) {
            return "Nimi ei saa olla tyhjä!";
        }

        return "";
    });

    var aikaValidoija = new Validoija("aika", function (data) {
        console.log("aika validoija");
        if (!data) {
            return "Aika ei saa olla tyhjä!";
        }
        if (!myDate.test(data)) {
            return "Aika annettava muodossa: vvvv-kk-pp";
        }
        return "";
    });


    this.lisaaDataelementti = function (nimi, elementti) {
        elementit[nimi] = elementti;
    }

    this.lisaaTapahtuma = function (eventInformation) {
        var data = haeData();

        var tulos = nimiValidoija.validoi(data);
        if (tulos !== "") {
            alert(tulos);
            return;
        } else {
            console.log("Nimi OK!");
        }
        tulos = aikaValidoija.validoi(data);
        if (tulos !== "") {
            alert(tulos);
            return;
        } else {
            console.log("Aika OK!");
        }

        model.lisaaTapahtuma(data);
        tyhjennaElementit();
    }


    function haeData() {
        var data = {};
        for (var nimi in elementit) {
            data[nimi] = elementit[nimi].value;
        }

        return data;
    }

    function tyhjennaElementit() {
        for (var nimi in elementit) {
            elementit[nimi].value = "";
        }
    }
}

function Validoija(kentta, validointifunktio) {

    this.validoi = function (data) {
        return validointifunktio(data[kentta]);
    }
}

muistutus.init = function () {
    // luodaan palaset
    var listausnakyma = new muistutus.view.Listaus(document.getElementById("tapahtumat"));

    var lista = new muistutus.domain.Tapahtumalista(listausnakyma);
    listausnakyma.listaaTapahtumat(lista.annaTapahtumat());

    var kontrolli = new muistutus.controller.LomakeKontrolli(lista);

    // kytketään kontrolli elementteihin
    kontrolli.lisaaDataelementti("nimi", document.getElementById("nimi"));
    kontrolli.lisaaDataelementti("aika", document.getElementById("aika"));

    document.getElementById("lisaa").addEventListener("click", kontrolli.lisaaTapahtuma, false);
}