const setup = () => {
    console.log("loaded");
    document.getElementById("btnStart").addEventListener("click", startGame);
};

let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const startGame = () =>{
    document.getElementById("btnStart").remove();
    document.getElementById("target").addEventListener("click", clickedTarget);
    moveTarget();
}

const moveTarget = () => {
    let target = document.getElementById("target");
    let playField=document.getElementById("playField");

    let maxLeft= playField.clientWidth - global.IMAGE_SIZE;
    let maxTop= playField.clientHeight - global.IMAGE_SIZE;
    let nummer = Math.floor(Math.random() * global.IMAGE_COUNT);

    if(nummer === 0){
        target.className = "BOMB";
    }
    else{
        target.className = "";
    }

    target.setAttribute("src", global.IMAGE_PATH_PREFIX + nummer + global.IMAGE_PATH_SUFFIX);
    target.addEventListener("click", clickedTarget);
    target.style.left = Math.floor(Math.random() * maxLeft) + "px";
    target.style.top = Math.floor(Math.random() * maxTop) + "px";

    global.timeoutId = setTimeout(moveTarget, global.MOVE_DELAY);
}

const clickedTarget = (event) => {
    if(event.target.className.indexOf("BOMB") !== -1){
        gameOver();
    }
    else{
        hit();
    }
}

const hit = () =>{
    global.score = global.score + 1;
    document.getElementById("score").innerHTML = "Aantal hits: " + global.score;
}

const gameOver = () => {
    let target = document.getElementById("target");
    target.remove();
    clearTimeout(global.timeoutId);
    global.score = 0;
    window.alert("GAME OVER");

}
window.addEventListener("load", setup);