let setup = () => {
    let familieLeden = ["Matisse", "Feline", "Bert", "Petra", "Jennifer"];


    console.log("Aantal familieleden: " + familieLeden.length);


    console.log("Eerste familielid: " + familieLeden[0]);
    console.log("Derde familielid: " + familieLeden[2]);
    console.log("Vijfde familielid: " + familieLeden[4]);


    voegNaamToe(familieLeden);


    console.log("Familieleden als string: " + familieLeden.join(" - "));
}

const voegNaamToe = (leden) => {
    let naam = prompt("Voeg een naam toe:");
    if (naam) {
        leden.push(naam);
    }
}

window.addEventListener("load", setup);
