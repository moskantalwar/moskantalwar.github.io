const setup = () => {
    gemeenten();
};

const gemeenten = () => {
    let txtOutput = document.getElementById("gemeenten");
    let gemeentenLijst = [];
    let input = window.prompt("Gemeente: ", "");

    while (input && input.trim().toLowerCase() !== "stop") {
        gemeentenLijst.push(input.trim());
        input = window.prompt("Gemeente: ", "");
    }

    gemeentenLijst.sort();

    let opties = "";
    for (let i = 0; i < gemeentenLijst.length; i++) {
        opties += `<option>${gemeentenLijst[i]}</option>`;
    }
    txtOutput.innerHTML = opties;
};

window.addEventListener("load", setup);
