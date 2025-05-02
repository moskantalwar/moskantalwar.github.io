const setup = () => {
    let btnKnop = document.getElementById("btnKnop");
    btnKnop.addEventListener("click", toon);
}

const toon = () => {
    let inputText = document.getElementById("txtInput");
    let result = maakMetSpaties(inputText.value);
    console.log(result);
}

const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i);
        result += " ";
    }
    return result;
}

window.addEventListener("load", setup);
