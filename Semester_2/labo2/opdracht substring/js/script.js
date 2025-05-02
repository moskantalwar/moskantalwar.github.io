const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", script);
}

const script = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let txtBegin = document.getElementById("txtBegin");
    let txtEinde = document.getElementById("txtEinde");

    let tekst = txtInput.value;
    let idxBegin = parseInt(txtBegin.value, 10);
    let idxEinde = parseInt(txtEinde.value, 10);


    if (!isNaN(idxBegin) && !isNaN(idxEinde) && idxBegin >= 0 && idxBegin <= idxEinde && idxEinde <= tekst.length) {
        let resultaat = tekst.substring(idxBegin, idxEinde);
        txtOutput.textContent = resultaat;
    }
}

window.addEventListener('load', setup);
