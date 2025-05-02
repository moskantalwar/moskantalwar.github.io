const setup = () => {
    initialize();
    document.getElementById("btnSave")
        .addEventListener("click", () => {
            change(document.getElementById("savedColor"), document.getElementById("swatch"));
        });
    removeButtonPressedNow();
}

const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
};

const update = () => {
    let red=document.getElementById("sldRed").value;
    let green=document.getElementById("sldGreen").value;
    let blue=document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
    let swatch=document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const change  = (e, swatch) => {
    let element = document.createElement("div");
    let btnElement = document.createElement("input");
    element.setAttribute("class", "swatch2");
    btnElement.setAttribute("type", "button");
    btnElement.setAttribute("value", "x");
    btnElement.setAttribute("class", "removeButtonStyle")
    element.style.backgroundColor = swatch.style.backgroundColor;
    e.appendChild(element);
    element.appendChild(btnElement);
};

const removeButtonPressedNow = () => {
    document.getElementById("savedColor").addEventListener("click", (event) => {
        if (event.target.classList.contains("swatch2")) {
            let savedColor = event.target.style.backgroundColor;
            let rgbValues = savedColor.match(/\d+/g);

            if (rgbValues.length === 3) {
                document.getElementById("sldRed").value = rgbValues[0];
                document.getElementById("sldGreen").value = rgbValues[1];
                document.getElementById("sldBlue").value = rgbValues[2];
                update();
            }
            event.stopPropagation();
        } else if (event.target.classList.contains("removeButtonStyle")) {
            event.target.parentNode.remove();
        }
    });
};

window.addEventListener("load", setup);