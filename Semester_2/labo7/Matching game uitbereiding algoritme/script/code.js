let global = {
    TOTAL_IMAGES: 6,
    CARDS_PER_IMAGE: 2,
    CARDS_HORIZONTAL: 3,
    IMAGE_PREFIX: "images/",
    IMAGE_SUFFIX: ".png",
    BACKSIDE_IMAGE: "images/Achterkant.png",
    MATCH_IMAGE: "images/correct.png"
}

const shuffleCards = (array) => {
    array.sort(() => Math.random() - 0.5);
}

const showMatch = () => {
    let flippedCards = document.getElementsByClassName("voorkant");
    document.getElementById("goed").play();
    for (let i = 0; i < flippedCards.length; i++) {
        flippedCards[i].setAttribute("src", global.MATCH_IMAGE);
    }
}

const showNoMatch = () => {
    let flippedCards = document.getElementsByClassName("voorkant");
    document.getElementById("fout").play();
    for (let i = 0; i < flippedCards.length; i++) {
        flippedCards[i].className += " fout";
    }
}

const flipCardsBack = () => {
    let flippedCards = document.getElementsByClassName("voorkant");
    while (flippedCards.length > 0) {
        flippedCards[0].setAttribute("src", global.BACKSIDE_IMAGE);
        flippedCards[0].className = "kaart achterkant";
    }
    document.getElementById("playField").className = "";
    document.getElementById("Terugdraai").play();
}

const removeMatchedCards = () => {
    let card;
    let flippedCards = document.getElementsByClassName("voorkant");
    while (flippedCards.length > 0) {
        card = flippedCards[0];
        card.removeEventListener("click", cardClick);
        card.parentNode.removeChild(card);
    }
    document.getElementById("playField").className = "";
    checkGameComplete();
}

const checkGameComplete = () => {
    let playField;
    let cards = document.getElementsByClassName("kaart");
    if (cards.length == 0) {
        playField = document.getElementById("playField");
        let height = playField.clientHeight;
        playField.innerHTML = "";
        playField.style.height = height + "px";
        playField.className = "klaar";
    }
}

const checkMatch = (cards) => {
    let firstCard = cards[0];
    let match = true;
    for (let i = 1; i < cards.length; i++) {
        if (firstCard.getAttribute("src") != cards[i].getAttribute("src")) {
            match = false;
            break;
        }
    }
    if (match) {
        window.setTimeout(removeMatchedCards, 1200);
        window.setTimeout(showMatch, 600);
    } else {
        window.setTimeout(flipCardsBack, 1200);
        window.setTimeout(showNoMatch, 600);
    }
}

const cardClick = (e) => {
    if (document.getElementById("playField").className != "geblokkeerd") {
        let card = e.target;
        let flippedCards = document.getElementsByClassName("voorkant");
        document.getElementById("draai").play();
        card.className = "kaart voorkant";
        card.setAttribute("src", card.getAttribute("data-imageSource"));
        if (flippedCards.length == global.CARDS_PER_IMAGE) {
            checkMatch(flippedCards);
            document.getElementById("playField").className = "geblokkeerd";
        }
    }
}

const createCardSlot = (parent, cardNumber) => {
    let slot = document.createElement("span");
    let card = document.createElement("img");

    card.className = "kaart achterkant";
    card.setAttribute("src", global.BACKSIDE_IMAGE);
    card.setAttribute("data-imageSource", global.IMAGE_PREFIX + cardNumber + global.IMAGE_SUFFIX);
    card.addEventListener("click", cardClick);

    slot.className = "vak";
    slot.appendChild(card);

    parent.appendChild(slot);
}

const playTheGame = () => {
    let playField = document.getElementById("playField");
    let cardNumbers = [];
    let lineBreakElement;
    let totalCards = global.TOTAL_IMAGES * global.CARDS_PER_IMAGE;

    for (let i = 0; i < totalCards; i++) {
        cardNumbers.push((i % global.TOTAL_IMAGES) + 1);
    }

    shuffleCards(cardNumbers);

    for (let i = 0; i < totalCards; i++) {
        if (i % global.CARDS_HORIZONTAL == 0 && i != 0) {
            lineBreakElement = document.createElement("br");
            playField.appendChild(lineBreakElement);
        }
        createCardSlot(playField, cardNumbers[i]);
    }
}

window.addEventListener("load", playTheGame);