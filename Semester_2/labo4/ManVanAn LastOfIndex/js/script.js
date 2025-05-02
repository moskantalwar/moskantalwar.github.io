const setup = () => {
    document.getElementById("btnKnop").addEventListener("click", click);
}

const click = () => {
    let txtText = document.getElementById("txtInput");
    let text = txtText.value;
    let txtZoekText = document.getElementById("txtZoekText");
    let zoekText = txtZoekText.value;
    let txtAantal = document.getElementById("txtAantal");

    let aantal = count(text, zoekText);
    txtAantal.textContent = "Aantal: " + aantal;
}

const count = (text, zoekText) => {
    let result = 0;
    let index = text.lastIndexOf(zoekText);

    while (index !== -1) {
        result++;
        index = text.lastIndexOf(zoekText, index - 1);
    }
    return result;
}

window.addEventListener("load", setup);

