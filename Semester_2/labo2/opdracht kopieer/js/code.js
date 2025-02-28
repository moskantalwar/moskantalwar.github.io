document.addEventListener("DOMContentLoaded", () => {
    // Definieer de kopieerfunctie eerst
    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let txtOutput = document.getElementById("txtOutput");

        // Zet de ingevoerde tekst in het <p> element
        txtOutput.textContent = txtInput.value;
    };

    // Koppelt de knop aan de functie 'kopieer'
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
});
