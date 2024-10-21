const hodinovka = 300;
const pocetHodin = Number(prompt("Zadej počet hodin zaměstnance", "160"));
const premie = Number(prompt("Zadej mimořádnou odměnu v Kč"));
const plat = hodinovka * pocetHodin + premie;

document.body.innerHTML += "<p>Plat: " + plat + " Kč.</p>";
