const setup = () => {
    geefOpvallend();
}

const geefOpvallend = () => {
    let paragraphList = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < paragraphList.length; i++) {
        paragraphList[i].classList.add("opvallend");
    }
}



window.addEventListener("load", setup);