const setup = () => {
    let geboortedatum = new Date(2004, 10, 3);
    let vandaag = new Date();

    let dagenOud = Math.floor((vandaag - geboortedatum) / 86400000);
    console.log("Ik ben " + dagenOud + " dagen oud");

    let dagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    console.log("Ik ben geboren op een " + dagen[geboortedatum.getDay()]);
}

window.addEventListener("load", setup);
