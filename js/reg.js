window.onload = function () {
  document.querySelector("#posalji").addEventListener("click", ispitaj);
};

function ispitaj() {

  let nizGreske = [];
  let dobro = document.getElementById("dobro");
  let Ime = document.getElementById("ime").value;
  let email = document.getElementById("em").value;
  let broj = document.getElementById("broj").value;

  let reIme = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,9}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14})+$/;
  let reEmail = /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;

  let rebroj = /^\+381\s6[01234569][0-9]{6,7}$/;

  if (!reIme.test(Ime)) {
    document.getElementById("Pogresno").innerHTML =
      " *Pogresno uneto Ime i Prezime";
    document.getElementById("Pogresno").style.color = "red";
    nizGreske.push("Greska u imenu");
  } else {
    document.getElementById("Pogresno").style.display = "none";
    // Ime.style.border = "1px solid green";

  }

  if (!reEmail.test(email)) {
    document.getElementById("Pogresnoem").innerHTML =
      " *Pogresno upisan e-mail";
    document.getElementById("Pogresnoem").style.color = "red";
    nizGreske.push("Greska u imenu");
  } else {
    document.getElementById("Pogresnoem").style.display = "none";
    // email.style.border = "1px solid green";
  }

  if (!rebroj.test(broj)) {
    document.getElementById("Pogresnobr").innerHTML =
      " *Pogresno upisan broj, upisati u formatu +381(razmak)6...";
    document.getElementById("Pogresnobr").style.color = "red";
    nizGreske.push("Greska u imenu");
  } else {
    document.getElementById("Pogresnobr").style.display = "none";
    // broj.style.border = "1px solid green";
  }

  if (nizGreske == 0) {
    dobro.style.border = "1px solid green";
    dobro.style.color = "white";
    dobro.style.backgroundColor = "green";
    dobro.style.padding = "10px";

    dobro.innerHTML = "<i class='fa far fa-check'></i> Uspesno ste popunili formu, poruka je poslata!";
  }
}