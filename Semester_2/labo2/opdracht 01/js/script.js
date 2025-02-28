const setup = () => {
    document.getElementById("alert").addEventListener("click", handleAlert);
    document.getElementById("confirm").addEventListener("click", handleConfirm);
    document.getElementById("prompt").addEventListener("click", handlePrompt);
};

window.addEventListener("load", setup);

const handleAlert = () => {
    window.alert("Dit is een mededeling");
    console.log("Alert getoond");
};

const handleConfirm = () => {
    let result = window.confirm("Weet u het zeker?");

    if (result) {
        console.log("Gebruiker koos OK");
    } else {
        console.log("Gebruiker koos Annuleren");
    }
};

const handlePrompt = () => {
    let userInput = window.prompt("Wat is uw naam?", "onbekend");

    if (userInput !== null) {
        console.log("Gebruiker heeft naam ingevoerd: " + userInput);
    } else {
        console.log("Gebruiker heeft geannuleerd");
    }
};
