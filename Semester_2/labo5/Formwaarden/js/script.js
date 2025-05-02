const setup = () => {
    document.getElementById("showResult").addEventListener("click", onClick);
}

const onClick = () => {
    getRoker();
    getMoedertaal();
    getBuurland();
    getBestelling();
}

const getRoker = () => {
    let roker = document.getElementById("checkRoker").checked;
    if (roker === true) {
        console.log("is roker");
    } else {
        console.log("is geen roker");
    }
}

const getMoedertaal = () => {
    let moedertaalRadios = document.getElementsByName("radioMoedertaal");
    for (let i = 0; i < moedertaalRadios.length; i++) {
        if (moedertaalRadios[i].checked) {
            console.log("moedertaal is " + moedertaalRadios[i].id);
        }
    }
}

const getBuurland = () => {
    let buurlandOptions = document.getElementById("selectBuurland").options;
    console.log("favoriete buurland is " + buurlandOptions[buurlandOptions.selectedIndex].text);
}

const getBestelling = () => {
    let bestellingOptions = document.getElementById('selectBestelling').options;
    let bestelling = "bestelling bestaat uit";
    for (let i = 0; i < bestellingOptions.length; i++) {
        if (bestellingOptions[i].selected) {
            bestelling += " " + bestellingOptions[i].text;
        }
    }
    console.log(bestelling);
}

window.addEventListener("load", setup);