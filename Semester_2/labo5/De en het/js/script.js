const setup = () => {
    let btnKnop = document.getElementById('btnKnop');
    btnKnop.addEventListener('click', toonMaarOpConsole);
};

const toonMaarOpConsole = () => {
    let txtInput = document.getElementById("txtInput");
    let text = txtInput.value.trim();
    let aanpassing = text.replace(/\bde\b/g, "het");

    console.log(aanpassing);
};

window.addEventListener("load", setup);
