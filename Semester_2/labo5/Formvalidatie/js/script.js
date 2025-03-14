const setup = () => {

    let btnValideer=document.getElementById("validate");
    btnValideer.addEventListener("click", valideer);
}


const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerDatum();
    valideerEmail();
    valideerKinderen();


    console.log (
        document.getElementById("errVoornaam").textContent === "" &&
        document.getElementById("errFamilienaam").textContent === "" &&
        document.getElementById("errGeboortedatum").textContent === "" &&
        document.getElementById("errEmail").textContent === "" &&
        document.getElementById("errAantalKinderen").textContent === ""
    );

    if (
        document.getElementById("errVoornaam").textContent === "" &&
        document.getElementById("errFamilienaam").textContent === "" &&
        document.getElementById("errGeboortedatum").textContent === "" &&
        document.getElementById("errEmail").textContent === "" &&
        document.getElementById("errAantalKinderen").textContent === ""
    ) {
        console.log("Alles is goed, alert wordt getoond.");
        alert("Proficiat!");
    }
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    errVoornaam.textContent = "";

    if (voornaam.length > 30) {
        errVoornaam.textContent = "max. 30 karakters";
        txtVoornaam.style.border = "2px solid red";
    } else {
        txtVoornaam.style.border = "";
    }
}

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    errFamilienaam.textContent = "";

    if (familienaam === "") {
        errFamilienaam.textContent = "verplicht veld";
        txtFamilienaam.style.border = "2px solid red";
        return;
    }
    if (familienaam.length > 50) {
        errFamilienaam.textContent = "max. 50 karakters";
        txtFamilienaam.style.border = "2px solid red";
    } else {
        txtFamilienaam.style.border = "";
    }
}

const valideerDatum = () => {
    let textGeboortedatum = document.getElementById("textGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = textGeboortedatum.value.trim();
    errGeboortedatum.textContent = "";

    if (geboortedatum === "") {
        errGeboortedatum.textContent = "verplicht veld";
        textGeboortedatum.style.border = "2px solid red";
        return;
    }

    if (geboortedatum.length !== 10 || geboortedatum[4] !== '-' || geboortedatum[7] !== '-') {
        errGeboortedatum.textContent = "formaat is niet jjjj-mm-dd";
        textGeboortedatum.style.border = "2px solid red";
        return;
    }

    let year = parseInt(geboortedatum.substring(0, 4));
    let month = parseInt(geboortedatum.substring(5, 7));
    let day = parseInt(geboortedatum.substring(8, 10));

    if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        errGeboortedatum.textContent = "ongeldige datum";
        textGeboortedatum.style.border = "2px solid red";
    } else {
        textGeboortedatum.style.border = "";
    }
}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();
    errEmail.textContent = "";

    if (email === "") {
        errEmail.textContent = "verplicht veld";
        txtEmail.style.border = "2px solid red";
        return;
    }

    let count = 0;
    let index = email.indexOf("@");
    while (index !== -1) {
        count++;
        index = email.indexOf("@", index + 1);
    }

    if (count !== 1 || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1) {
        errEmail.textContent = "geen geldig email adres";
        txtEmail.style.border = "2px solid red";
    } else {
        txtEmail.style.border = "";
    }
}

const valideerKinderen = () => {
    let numberAantalKinderen = document.getElementById("numberAantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = numberAantalKinderen.value.trim();
    errAantalKinderen.textContent = "";

    if (!isGetal(aantalKinderen) || aantalKinderen < 0) {
        errAantalKinderen.textContent = "is geen positief getal";
        numberAantalKinderen.style.border = "2px solid red";
        return;
    }
    if (aantalKinderen < 99) {
        errAantalKinderen.textContent = "is te vruchtbaar";
        numberAantalKinderen.style.border = "2px solid red";
    } else {
        numberAantalKinderen.style.border = "";
    }
}

const isGetal = (waarde) => {
    return !isNaN(waarde) && waarde !== "";
}

window.addEventListener("load", setup);
