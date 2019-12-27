window.onload = function () {
  let nizVozila = ["../img/bmw1.jpg", "../img/audia7.jpg", "../img/mustang.jpg", "../img/merc.jpg"];

  let ispis = " ";

  for (let i = 0; i < nizVozila.length; i++) {
    ispis += '<img src="' + nizVozila[i] + '">';
  }

  ispis += "";

  document.querySelector(".jedno").innerHTML = ispis;


  let desno = document.querySelector("#desnostrana");
  let automobili = [{
      naziv: " BMW",
      model: "1",
      snaga: "150",
      opis: "BMW serije 1 je automobil kompaktne klase. BMW 1 118i 2006 godiste, nudi sportske osobine za vozace koji ne ocekuju vrhunske rezultate na stazi. Kocenje je odlicno, stabilnost, lezanje na putu i upravljivost daleko ispred konkurencije. DTC sistem ispravlja mane i ono sto su mu zamerali zbog zadnjeg pogona, sada to dolazi do potpunog izrazaja."
    },
    {
      naziv: " Audi",
      model: " A7",
      snaga: " 170",
      opis: "Nepogrešiv, A7. Oštra linija svetlosnih grupa sa sopstvenim svetlosnim potpisom preko naglašenog prednjeg dela sa širokim ramom i coupé siluetom do skulpturalnog zadnjeg dela - Audi A7 Sportback je ambasador revolucionarnog dizajna sa istovremeno izraženim klasičnim quattro genima. Dokaz da se dosledan dizajn može unaprediti i redizajniranjem forme od korena."
    },
    {
      naziv: " Ford",
      model: " Mustang",
      snaga: " 240",
      opis: "Ford Mustang - U očima tipičnog Amerikanca, postoje samo tri stvari na ovom svetu koje su vredne borbe - američka pita, muzika Beach Boysa i Ford Mustang. Mustang je jedan od najstarijih Fordovih modela koji je još uvijek u proizvodnji, trenutno je u petoj generaciji. "
    },

    {
      naziv: " Mercedes",
      model: " Benz, A klasa",
      snaga: " 200",
      opis: "Sve je novo, dizajn, platforma, tehnologija, A klasa više nema izgled minivena, to je automobil niže srednje klase u sportskom stilu. Od druge generacije je niži za 16 cm, a za 41 cm duži. Može imati nekoliko nivoa oprema, style, urban i AMG sport/AMG line."
    }
  ];
  let ispisauta = '';
  automobili.forEach(automobil => {
    ispisauta += `
      <div class="spanovi"> 
        <ul> 
          <li>
            <b>Model:</b>${automobil.model} 
          </li>
          <li>
            <b>Vozilo:</b>${automobil.naziv} 
          </li>
          <li><b>Snaga:</b>${automobil.snaga} 
          </li>
        </ul>${automobil.opis} 
    </div>`;
  });
  desno.innerHTML = ispisauta;

  let nizSuzuki = [
    "<img src='../img/suz.jpg'",
    "<b>Naziv: </b> Suzuki",
    "<b>Model: </b> Vitara",
    "<b>Snaga: </b> 220",
    "Još od lansiranja na tržište 1988. godine, začetnik SUV koncepta, Suzuki Vitara, je zavredela epitete dobrog stila, kompaktnog, gradski orijentisanog dizajna, udobne vožnje na putu sa odličnim off-road sposobnostima. "
  ];

  let nizRolce = [
    "<img src='../img/rolls.jpg'",
    "<b>Naziv: </b>Rolls Royce",
    "<b>Model: </b> Phantom",
    "<b>Snaga: </b> 250",
    "Unutrašnjost je, kao i uvek kad su Rols-Rojsovi modeli, dovedena do savršenstva. U zadnjem delu zadržan je art deco stil, priručni stočići i tv ekrani."
  ];

  let nizMith = [
    "<img src='../img/mits.jpg'",
    "<b>Naziv: </b>Mitsubishi",
    "<b>Model: </b> Lancer",
    "<b>Snaga: </b> 250",
    "Vozači koji prije svega cijene izdržljivost i kvalitetu tako brzo dolaze na svoje, a treba pohvaliti i prostranost. U limuzini rastegnutoj na 457 cm sjedi se ugodno, mjesta za ramena ima dovoljno, a ne smeta niti što je upravljač podesiv samo po visini."
  ];

  let nizPeugeut = [
    "<img src='../img/peu.jpg'",
    "<b>Naziv: </b>Peugeut",
    "<b>Model: </b> 407",
    "<b>Snaga: </b> 180",
    "Novi SUV PEUGEOT 3008 otkriva svoju snagu i svoj karakter. Upečatljiv izgled ovog SUV-a potvrđuje da je on u isto vreme robustan i elegantan. Ukrcajte se u tehnološku kabinu novog SUV 3008 i doživite još veće iskustvo u vožnji"
  ];


  let ostalaVozila = ["Suzuki", "Rolls Royce", "Mitsubishi", "Peugeot"];

  let prikaz = "<select id='spisak'>";
  for (let x = 0; x < ostalaVozila.length; x++) {
    prikaz +=
      "<option value='" +
      ostalaVozila[x] +
      "'>" +
      ostalaVozila[x] +
      "</option>";
  }

  prikaz += "</option>";

  document.getElementById("listing").innerHTML = prikaz;
  document.getElementById("klik").addEventListener("click", klik);

  function klik() {
    let lista = document.getElementById("spisak");
    let selektovani = lista.selectedIndex;
    if (selektovani == 0) {
      let suzuki = "<ul>";
      for (let z = 0; z < nizSuzuki.length; z++) {
        suzuki += "<li id='vozilolista'>" + nizSuzuki[z] + "</li>";
      }

      suzuki += "</ul>";
      document.getElementById("drugovozilo").innerHTML = suzuki;
    }
    if (selektovani == 1) {
      let rolce = "<ul>";
      for (let y = 0; y < nizRolce.length; y++) {
        rolce += "<li>" + nizRolce[y] + "</li>";
      }
      rolce += "</ul>";
      document.getElementById("drugovozilo").innerHTML = rolce;
    }

    if (selektovani == 2) {
      let mits = "<ul>";
      for (let m = 0; m < nizRolce.length; m++) {
        mits += "<li>" + nizMith[m] + "</li>";
      }
      mits += "</ul>";
      document.getElementById("drugovozilo").innerHTML = mits;
    }
    if (selektovani == 3) {
      let peu = "<ul>";
      for (let p = 0; p < nizRolce.length; p++) {
        peu += "<li>" + nizPeugeut[p] + "</li>";
      }
      peu += "</ul>";
      document.getElementById("drugovozilo").innerHTML = peu;
    }


  }
};