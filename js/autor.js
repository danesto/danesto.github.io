window.onload = function () {

    let nizAutor = [
        "<b>Ime i prezime: </b>Danilo Stojanovic",
        "<b>Adresa:M</b> Veljka Dugoševića 29D, Zvezdara",
        "<b>Adresa 2:</b> Čede Todorovića, 1 Ub",
        "<b>E-mail:</b> danilo.stojanovic184.16@ict.edu.rs",
        "<b>E-mail 2:</b> dane.sto@gmail.com",
        "<b>Index</b> 184/16"

    ];
    let ispis = "<ul>";
    for (let i = 0; i < nizAutor.length; i++) {
        ispis += "<li>" + nizAutor[i] + "</li>";
    }
    ispis += "</ul>";
    document.getElementById("informacijeautor").innerHTML = ispis;
}