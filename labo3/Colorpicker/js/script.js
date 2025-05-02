const schuiverInstellen = () => {
	let schuifbalk = document.getElementsByClassName("schuifbalk");
	for (let i = 0; i < schuifbalk.length; i++) {
		schuifbalk[i].addEventListener("input", update);
	}
	update();
};

const update = () => {
	let red = document.getElementById("sRed").value;
	let green = document.getElementById("sGreen").value;
	let blue = document.getElementById("sBlue").value;

	document.getElementById("RedValue").innerHTML = red;
	document.getElementById("GreenValue").innerHTML = green;
	document.getElementById("BlueValue").innerHTML = blue;
	let voorbeeld = document.getElementById("voorbeeld");
	voorbeeld.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

window.addEventListener("load", schuiverInstellen);
