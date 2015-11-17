$(document).ready(function () {
    var data = [{
            title: "PerusMOOC?",
            paragraphs: [
                {paragraph: "Helsingin yliopiston tietojenkäsittelytieteen laitos järjestää kokonaan etäopiskeluna suoritettavan kaikille avoimen verkkokurssin tietokoneohjelmoinnista (MOOC). Kurssi on tehtäväperustainen siten, että oppimateriaali \"opettaa itse itsensä\" tehtävistä saatavan automaattisen palautteen kautta. Kurssi on suunnattu peruskoulun yläkoululaisille, ja kurssilla pääsee tekemään muunmuassa matopelin."},
                {paragraph: "Koulusi voi osallistua PerusMOOCiin ilmoittautumalla sähköpostitse osoitteeseen mooc@cs.helsinki.fi. Voit myös ilmoittaa kurssista opiskelijoillesi, jotka saavat käydä kurssia vapaasti."},
                {paragraph: "Kurssi on kaikille ilmainen!"}
            ]
        },
        {
            title: "Materiaali",
            paragraphs: [
                {paragraph: "Polku kohti tekstiseikkailua..."},
                {paragraph: "Polku kohti animaatioita..."},
                {paragraph: "Polku kohti käyttäjän näppäimistön käsittelyä..."}
            ]
        },
        {
            title: "Oma etenemiseni",
            paragraphs: [
                {paragraph: "TBA!"}
            ]
        }];

        var data1 = {
            titles: data
        };

 /*   var data = {
            title: "PerusMOOC?",
            paragraphs: [
                {paragraph: "Helsingin yliopiston tietojenkäsittelytieteen laitos järjestää kokonaan etäopiskeluna suoritettavan kaikille avoimen verkkokurssin tietokoneohjelmoinnista (MOOC). Kurssi on tehtäväperustainen siten, että oppimateriaali \"opettaa itse itsensä\" tehtävistä saatavan automaattisen palautteen kautta. Kurssi on suunnattu peruskoulun yläkoululaisille, ja kurssilla pääsee tekemään muunmuassa matopelin."},
                {paragraph: "Koulusi voi osallistua PerusMOOCiin ilmoittautumalla sähköpostitse osoitteeseen mooc@cs.helsinki.fi. Voit myös ilmoittaa kurssista opiskelijoillesi, jotka saavat käydä kurssia vapaasti."},
                {paragraph: "Kurssi on kaikille ilmainen!"}
            ]
    };
   */
  
    console.log("pre-render");
        var html = Mustache.render($("#template").html(), data1);
        console.log("post-render");
        $("#view").html(html);

});


/*
 function init() {
 
 }
 */