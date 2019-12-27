window.onload = function () {
    let nizInfo = ["<b>Adresa: Cede Todorovica</b>",
        "<b>Telefon: 0654444007</b>",

        "Dovoljno je da se javite na neki od naših telefona i neko od ljubaznog osoblja AVACO renta a car preduzeća ce Vam dovesti auto tamo gde Vi to zahtevate. Sve veca tražnja za rent a car uslugama jasno govori da iznajmljivanje automobila više nije luksuz vec korisno rešenje. "


    ];

    let ispis = "<ul>";
    for (let i = 0; i < nizInfo.length; i++) {
        ispis += "<li>" + nizInfo[i] + "</li>";

    }
    ispis += "</ul>";
    document.getElementById("info").innerHTML = ispis;
}