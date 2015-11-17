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

    $("header nav a").each(function (index) {
        $(this).attr("id", index);
        $(this).click(function (eventInformation) {
            displaySection(data[index]);
            eventInformation.preventDefault();
        });
    });

    displaySection(data[0]);
});

function displaySection(data) {

    var html = Mustache.render($("#template").html(), data);
    $("#view").html(html);
}