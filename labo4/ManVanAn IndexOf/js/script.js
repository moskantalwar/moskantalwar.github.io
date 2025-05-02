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
    let index = text.indexOf(zoekText);

    while(index !== -1){
        result++;
        index = text.indexOf(zoekText, index+zoekText.length);
    }
    return result;
}
window.addEventListener("load", setup);