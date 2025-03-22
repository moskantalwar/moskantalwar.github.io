const setup = () => {
    document.getElementById("btnAdd").addEventListener("click", klikken)
}

const klikken = () => {
    let div = document.querySelector("div");
    let pElement = document.createElement("p");
    pElement.textContent = "Some text";
    div.appendChild(pElement);
}

window.addEventListener("load", setup);
