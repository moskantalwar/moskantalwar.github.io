const setup = () => {
    document.getElementById("btnKnop").addEventListener("click", toonTrigrams);


}

const toonTrigrams = () =>{
    let woord = document.getElementById("txtInput").value;
    let txtOutput = document.getElementById("1stTrigrams")

    for(let i = 0; i < woord.length-2; i++){
        txtOutput.innerHTML += "<li>" + woord.slice(i, i+3) + "</li>";
    }
}

const toonTrigrams2 = () =>{
    let tekst = document.getElementById("txtInput").value;
    let txtOutput = document.getElementById("1stTrigrams")
    let trigrams = getTrigrams(tekst);
    let output = "";
    for(let i = 0; i < trigrams.length; i++){
        output += "<li>" + trigrams[i] + "</li>";
    }
    txtOutput.innerHTML = output;
}
const getTrigrams = (tekst) =>{
    let result = [];
    let trigram;

    for(let i = 0; i <= woord.length-3; i++){
        trigram = tekst.slice(i, i+3);
        result.push(trigram);
    }
    return result;
}

window.addEventListener("load", setup);