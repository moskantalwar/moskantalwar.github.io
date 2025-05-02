const setup = () => {

    let btnVoegToe = document.getElementById("btnVoegToe");
    let btnWijzig = document.getElementById("btnWijzig");

    btnVoegToe.addEventListener("click", voegToe);
    btnWijzig.addEventListener("click", wijzigLaatste);
}

const voegToe = () => {

    let txtInput = document.getElementById("txtInput");
    let lstEntries = document.getElementById("lstEntries");
    let tekst = txtInput.value;
    lstEntries.innerHTML += "<li>" + tekst + "</li>";
}

const wijzigLaatste = () => {
    let txtInput = document.getElementById("txtInput");
    let lstEntries = document.getElementById("lstEntries");
    let laatsteItem = lstEntries.lastElementChild;

    if (laatsteItem) {
        laatsteItem.textContent = txtInput.value;
    }
}

window.addEventListener('load', setup);