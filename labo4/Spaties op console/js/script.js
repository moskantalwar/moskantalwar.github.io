const setup = () => {
    let btnKnop = document.getElementById("btnKnop");
    btnKnop.addEventListener("click", toonOpConsole);
}

const toonOpConsole = () => {
    let txtInput = document.getElementById("txtInput");
    let text = txtInput.value;
    let spatiesGescheidenText = "";

    for (let i = 0; i < text.length; i++) {
        spatiesGescheidenText += text.charAt(i);
        spatiesGescheidenText += " ";
    }
    console.log(spatiesGescheidenText);
}

window.addEventListener("load", setup);
