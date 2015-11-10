var kauppa = {};

kauppa.hinnasto = (function() {
    function annaHinta(tuote) {
        return 3;
    }

    return {
        hinta: annaHinta
    };
})();


kauppa.varasto = (function() {
    var varastossa = [];
    
    function lisaaTuote(tuote, lukumaara) {
        if(!varastossa[tuote]) {
            // jos varastossa ei ole tuotetta, lisätään se sinne
            varastossa[tuote] = 0;
        }
        // kasvatetaan tuotteen lukumäärää yhdellä
        varastossa[tuote]+=lukumaara;
    }

    function otaTuote(tuote, lukumaara) {
        if(!varastossa[tuote]) {
            // jos varastossa ei ole tuotetta, lisätään se sinne
            varastossa[tuote] = 0;
        }
        // kasvatetaan tuotteen lukumäärää yhdellä
        varastossa[tuote]-=lukumaara;
    }

    function saldo(tuote) {
        if(!varastossa[tuote]) {
            // jos varastossa ei ole tuotetta, lisätään se sinne
            varastossa[tuote] = 0;
        }
        // kasvatetaan tuotteen lukumäärää yhdellä
        return varastossa[tuote];
    }
    
    return {
        lisaa: lisaaTuote,
        ota: otaTuote,
        saldo: saldo
    };
})();

kauppa.ostoskori = (function(hinnasto, varasto) {
    var ostokset = [];

    function lisaaOstos(tuotteenNimi) {
        if(!ostokset[tuotteenNimi]) {
            ostokset[tuotteenNimi] = 0;
        }

        ostokset[tuotteenNimi]++;
    }

    function tuotteitaYhteensa() {
        var lukumaara = 0;
        for(var tuotteenNimi in ostokset) {
            lukumaara += ostokset[tuotteenNimi];
        }
        
        return lukumaara;
    }

    function yhteishinta() {
        var summa = 0;
        for(var tuotteenNimi in ostokset) {
            summa += ostokset[tuotteenNimi] * hinnasto.hinta(tuotteenNimi);
        }
        
        return summa;
    }

    function tilaaOstoskori(){
        var lukumaara=0;
        for(var tuotteenNimi in ostokset) {
            lukumaara = ostokset[tuotteenNimi];
            varasto.ota(tuotteenNimi,lukumaara);
            ostokset[tuotteenNimi]=0;
        }        
    }

    return {
        lisaa: lisaaOstos,
        tuotteidenLukumaara: tuotteitaYhteensa,
        yhteishinta: yhteishinta,
        tilaa: tilaaOstoskori
    };
   
 })(kauppa.hinnasto, kauppa.varasto);


kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("kivi");
console.log(kauppa.ostoskori.tuotteidenLukumaara()); // 3
console.log(kauppa.varasto.saldo("kivi")); // 0

kauppa.ostoskori.tilaa();
console.log(kauppa.ostoskori.tuotteidenLukumaara()); // 0
console.log(kauppa.varasto.saldo("kivi")); // -3
//
console.log(kauppa.varasto.saldo("paperi")); // 0

kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("kivi");
kauppa.ostoskori.lisaa("paperi");

kauppa.ostoskori.tilaa();
console.log(kauppa.varasto.saldo("kivi")); // -5
console.log(kauppa.varasto.saldo("paperi")); // -1
//
kauppa.varasto.lisaa("kivi", 7);
console.log(kauppa.varasto.saldo("kivi")); // 2