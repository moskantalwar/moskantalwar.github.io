let personen = [];

const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();

    if (isAllesGevalideerd()) {
        let email = document.getElementById("txtEmail").value;
        let persoon = {};
        if (lstPersonen.selectedIndex === -1) {
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon);
            voegPersoonToeAanLijstInUserInterface(persoon);
        } else {
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }
};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    persoon.firstName = document.getElementById("txtVoornaam").value;
    persoon.lastName = document.getElementById("txtFamilienaam").value;
    persoon.geboortedatum = document.getElementById("txtGeboorteDatum").value;
    persoon.email = document.getElementById("txtEmail").value;
    persoon.aantalKinderen = document.getElementById("txtAantalKinderen").value;
};

const updatePersoonInLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let index = personen.indexOf(persoon);
    let option = lstPersonen.options[index];
    option.text = `${persoon.firstName} ${persoon.lastName}`;
    option.value = `${persoon.email}`;
};

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let select = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = `${persoon.firstName} ${persoon.lastName}`;
    option.value = `${persoon.email}`;
    select.appendChild(option);
};

const toonDataVanPersoon = (e) => {
    let index = e.currentTarget.selectedIndex;
    if (index !== -1) {
        let persoon = personen[index];
        document.getElementById("txtVoornaam").value = persoon.firstName;
        document.getElementById("txtFamilienaam").value = persoon.lastName;
        document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    }
}

const isAllesGevalideerd = () => {
    let errors = document.querySelectorAll('.errorMessage');
    let gevalideerd = true;
    errors.forEach((error) => {
        if (error.innerHTML !== "") {
            gevalideerd = false;
        }
    })
    return gevalideerd;
};

const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
    let inputs = document.querySelectorAll('input[type=text]');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    clearAllErrors();
};


const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", toonDataVanPersoon);
};

window.addEventListener("load", setup);