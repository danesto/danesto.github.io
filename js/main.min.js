let ispis = () => {
    let b = "";
    [{
        src: "audi",
        alt: "Audi"
    }, {
        src: "3",
        alt: "Audi"
    }, {
        src: "bmw",
        alt: "BMW"
    }].forEach(e => b += `<img src="img/${e.src}.jpg" alt=${e.alt} />`), b += "", document.querySelector(".vozila").innerHTML = b;
    let d = "<ul>";
    ["AUDI", "BMW", "FORD"].forEach(e => d += `<li>  ${e}  </li>`), d += "</ul>", document.querySelector("#naslov").innerHTML = d
};
window.onload = () => ispis();