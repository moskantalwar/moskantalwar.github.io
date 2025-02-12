
function showAlert() {
    alert("Dit is een alert!");
}

function showConfirm() {
    let confirmResult = confirm("Weet je zeker dat je wilt doorgaan?");
    console.log("Confirm resultaat:", confirmResult); // true voor OK, false voor Cancel
    document.getElementById("confirmResult").innerText = "Confirm resultaat: " + confirmResult;
}

function showPrompt() {
    let userInput = prompt("Voer naam in:");
    console.log("Prompt resultaat:", userInput); // Naam of null voor Cancel
    document.getElementById("promptResult").innerText = "Prompt resultaat: " + (userInput ? userInput : "Cancelled");
}


function changeDom() {
    let exampleDiv = document.getElementById("exampleDiv");
    exampleDiv.style.color = "blue";
    exampleDiv.innerHTML = "De tekst in de div is veranderd!";
}


const setup = () => {
    console.log("De DOM is volledig geladen en klaar om te worden gemanipuleerd.");
};

window.addEventListener("load", setup);
