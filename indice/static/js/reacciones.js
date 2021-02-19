document.addEventListener("scroll", cargar);

var semialto = document.documentElement.clientHeight;
var ancho = document.documentElement.offsetWidth;

console.log(semialto);
console.log(ancho);
console.log(document.documentElement.scrollHeight/3);

function cargar() {

	var alto = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	
	var scroll = (document.documentElement.scrollTop);

    var carga = parseInt(ancho * (scroll/alto));

    let root = document.documentElement;
    root.style.setProperty("--carga", (carga + "px"));

	if ((document.documentElement.scrollHeight / 3) > ancho) {


		let root = document.documentElement;

		root.style.setProperty('--ancho', "420px");


	}
	else {

		let root = document.documentElement;

		root.style.setProperty('--ancho', "unset");

	}

}

