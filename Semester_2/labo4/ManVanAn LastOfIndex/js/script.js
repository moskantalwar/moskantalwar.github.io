const setup = () => {
    const btnKnop = document.getElementById("btnKnop");
    const txtInput = document.getElementById("txtInput");
    const txtZoekText = document.getElementById("txtZoekText");
    const txtAantal = document.getElementById("txtAantal");

    btnKnop.addEventListener("click", () => {
        const inputTekst = txtInput.value;
        const zoekText = txtZoekText.value;

        if (zoekText === "") {
            alert("Voer een zoektekst in.");
            return;
        }

        let count = 0;
        let pos = inputTekst.indexOf(zoekText);

        while (pos !== -1) {
            count++;
            pos = inputTekst.indexOf(zoekText, pos + 1);
        }

        txtAantal.textContent = "Aantal: " + count;
    });


    txtInput.value = "De man van An geeft geen hand aan ambetante verwanten";
    txtZoekText.value = "an";
};


window.addEventListener("load", setup);
