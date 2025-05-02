document.addEventListener("DOMContentLoaded", () => {
    // Definieer de kopieerfunctie eerst
    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");

        // Kopieer de ingevoerde tekst naar de console
        console.log(txtInput.value);
    };

    // Koppelt de knop aan de functie 'kopieer'
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
});


