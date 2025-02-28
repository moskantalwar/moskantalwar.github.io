const setup = () => {
    document.getElementById("herbereken").addEventListener("click", onClick);
}

const onClick = () => {
    let prijsList = document.getElementsByClassName("prijs");
    let aantalList = document.getElementsByClassName("aantal");
    let btwList = document.getElementsByClassName("btw");
    let subtotaalList = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < subtotaalList.length; i++) {
        let prijs = parseFloat(prijsList[i].innerHTML)
        let aantal = aantalList[i].value;
        let btw = parseInt(btwList[i].innerHTML);
        let subtotaal = (prijs * aantal) + ((prijs * aantal) * (btw / 100));
        subtotaalList[i].innerHTML = subtotaal.toFixed(2) + " Eur";
        totaal = totaal + parseFloat(subtotaalList[i].innerHTML);
        document.getElementById("totaal").innerHTML = totaal.toFixed(2) + " Eur";
    }
}

window.addEventListener("load", setup);