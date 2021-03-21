
// Se trae al espacio de dibujo y se le da contexto
var cuadrote = document.getElementById("espacioDibujable");
var papel = cuadrote.getContext("2d");

var largo = 1500;
var alto = 550;

papel.canvas.width = largo;
papel.canvas.height = alto;

var indicador = document.getElementById("Indicador");

indicador.innerHTML = (largo + "px. x " + alto +"px.");

var rojo = (document.getElementById("rango_R"));
var verde = (document.getElementById("rango_G"));
var azul = (document.getElementById("rango_B"));

var cuadrito = document.getElementById("muestraColor");
var muestra = cuadrito.getContext("2d");

var grueso = (document.getElementById("rango_grueso"));

var botonLimpiar = document.getElementById("btn_limpiar");

var pincel = document.getElementById("btn_lapiz");
var borrador = document.getElementById("btn_borrador");
var cubeta = document.getElementById("btn_rellenar");

var nota = document.getElementById("etiqueta");

var btnDescargar = document.getElementById("btn_Descarga");

var inicioMenu = false;

// Se declaran variables necesarias
var thick = 3;
var x = 150;
var y = 150;
var c;

var Eje_y_viejo;
var Eje_x_viejo;

var w = cuadrote.width;
var h = cuadrote.height;

var herramienta;

var clicking = false;

var openMenu = false;

var estadoMenu = false;

var estadoEsquina = false;

var guardado = [papel.getImageData(0, 0, cuadrote.width, cuadrote.height).data];

// Se referencian las variables de la hoja de estilos.
let root = document.documentElement;

// Dibujar el lienzo
rellenarCuadro("white", w, h, papel);

rojo.addEventListener("change", cambiar_color);
azul.addEventListener("change", cambiar_color);
verde.addEventListener("change", cambiar_color);

btnDescargar.addEventListener("click", download);

function download(){
    var link = document.createElement('a');
    link.download = 'Dibujo.png';
    link.href = cuadrote.toDataURL()
    link.click();
}

function Linea(color, thick, xi, yi, xf, yf, lienzo){

    // Comienza el trazo
    lienzo.beginPath();

    // Configura el color del trazo
    lienzo.strokeStyle = color;

    lienzo.lineWidth = thick;

    // Mueve el "lapiz" a su posición de inicio deseada
    lienzo.moveTo(xi,yi);

    // Crea una linea
    lienzo.lineTo(xf,yf);

    // Coloca la linea
    lienzo.stroke();

    // "Levanta" el lapiz
    lienzo.closePath();

}

function borrar (color, l, x, y, lienzo){

    lienzo.beginPath();

    lienzo.strokeStyle = color;

    lienzo.fillStyle = color;

    lienzo.fillRect((x-l), (y-l), 2*l, 2*l);

    lienzo.stroke();

    lienzo.closePath();

}

function cambiar_color() {

    rellenarCuadro("white", (cuadrito.width), (cuadrito.height), muestra);

    // Se trae, extrae los rangos del color en STRING
    var RGB = {

        R: (rojo.value),
        G: (verde.value),
        B: (azul.value)

    };

    //console.log(RGB);

    //Se compone el color final sumando los STRING

    c = "#";

    for ([x, y] of Object.entries(RGB)) {

        var hex = (parseInt(y)).toString(16);

        if (hex.length == 1) {

            c += "0";

        }

        c += hex;

    }
        
    c = c.toUpperCase();

    cNot = "#";

    for ([x, y] of Object.entries(RGB)) {

        var hexNot = (255 - parseInt(y)).toString(16);

        if (hexNot.length == 1) {

            cNot += "0";

        }

        cNot += hexNot;

    }

    cNot = cNot.toUpperCase();

    rellenarCuadro(c, (cuadrito.width), (cuadrito.height), muestra);

    size = cuadrito.height;
    

    muestra.font = (`bold ${size}px Arial`);
    muestra.fillStyle = cNot;
    muestra.fillText(c, (cuadrito.width/3), (cuadrito.height - 2));

    //console.log("No color: " + cNot);
    //console.log("color: " +  c);

    return c;

}

grueso.addEventListener("change", cambiar_grueso);

function cambiar_grueso(){

    thick = (grueso.value);

    nota.innerHTML = (thick + "px.");

    return thick;

}

function rellenarCuadro (color, ancho, alto, cuadro){

    for (k= 0; k < alto; k++){

        Linea(color, 3, 0, k, ancho, k, cuadro);

    }

}

pincel.addEventListener("click", cambiar_lapiz);
borrador.addEventListener("click", cambiar_borrar);
cubeta.addEventListener("click", cambiar_cubeta);

function cambiar_lapiz(){

    herramienta = "lapiz";

    let root = document.documentElement;

    root.style.setProperty('--imagen', "url('../imagenes/pen.png')");

}

function cambiar_borrar(){

    herramienta = "borrador";

    let root = document.documentElement;

    root.style.setProperty('--imagen', "url('../imagenes/eraser.png')");

}

function cambiar_cubeta(){

    herramienta = "cubeta";

    let root = document.documentElement;

    root.style.setProperty('--imagen', "url('../imagenes/bucket.png')");

}

document.addEventListener("mousedown", comenzar);


document.addEventListener("mouseup", terminar);

function terminar(){

    clicking = false;

    estadoEsquina = false;

    //console.log(papel.getImageData(0, 0, cuadrote.width, cuadrote.height).data);

    if(guardado != papel.getImageData(0, 0, cuadrote.width, cuadrote.height).data){
    
        guardado = papel.getImageData(0, 0, cuadrote.width, cuadrote.height).data;

        //console.log("GUARDADO!!!");

        //console.log(guardado);
 
    }
}

function comenzar(posicion){

    clicking = true;

    var Posicion = {
        Eje_x: ((posicion.clientX)),
        Eje_y: ((posicion.clientY)-103)
    };  

    //console.log(Posicion);

    //console.log("L: " + largo + " A: " + alto);

    var estilo = getComputedStyle(document.body);

    // Se obtiene la posición del Menu
    var menuY = "";
    var menuX = "";
    var radio = "";
    var ancho = "";

    for (var u = 0; u < (((estilo.getPropertyValue('--menuX')).length) - 2); u++){

        
        menuX = menuX + estilo.getPropertyValue('--menuX')[u]; 

    }

    for (var u = 0; u < (((estilo.getPropertyValue('--menuY')).length) - 2); u++){

        
        menuY = menuY + estilo.getPropertyValue('--menuY')[u]; 

    }

    for (var u = 0; u < (((estilo.getPropertyValue('--radio')).length) - 2); u++){

        
        radio = radio + estilo.getPropertyValue('--radio')[u]; 

    }

    for (var u = 0; u < (((estilo.getPropertyValue('--ancho')).length) - 2); u++){

        
        ancho = ancho + estilo.getPropertyValue('--ancho')[u]; 

    }

    var modulo = Math.sqrt( Math.pow((parseInt(menuX) - Posicion.Eje_x + 50), 2) + Math.pow((parseInt(menuY) - Posicion.Eje_y - 50), 2) );
    //console.log(modulo);

    estadoEsquina = false;
    inicioMenu = false;

    if(modulo < 50 ){

        if(estadoMenu == false){

            let root = document.documentElement;

            root.style.setProperty('--ancho', "500px");
            root.style.setProperty('--animacion1', "expandir1");
            root.style.setProperty('--animacion2', "expandir2");
            root.style.setProperty('--mostrar', "normal");

            estadoMenu = true;

        }
        else{

            let root = document.documentElement;

            root.style.setProperty('--ancho', "5px");
            root.style.setProperty('--animacion1', "contraer1");
            root.style.setProperty('--animacion2', "contraer2");
            setTimeout(function(){ root.style.setProperty('--mostrar', "none"); }, 500);


            estadoMenu = false;
        }

        inicioMenu = true;

    }

    else if( Posicion.Eje_x - 50 < (largo/2 + screen.width/2 ) && Posicion.Eje_y - 50 < alto && Posicion.Eje_x + 50 > (largo/2 + screen.width/2 ) && Posicion.Eje_y + 150 > alto ){

        estadoEsquina = true;

    }

    

    else if (herramienta == "cubeta"){

        var pixel_inicial = papel.getImageData(Posicion.Eje_x, Posicion.Eje_y, 1, 1).data;

        if(pixel_inicial[0] != 0 & pixel_inicial[1] != 0 & pixel_inicial[2] != 0 & pixel_inicial[3] != 0 & ((parseInt(menuX) - parseInt(ancho) > Posicion.Eje_x) || (parseInt(menuX) + parseInt(ancho) < Posicion.Eje_x) || (parseInt(menuY) < Posicion.Eje_y) || (parseInt(menuY) - 100 > Posicion.Eje_y))){

            var posicion_nueva = {
                Eje_x: ((posicion.clientX) - (screen.width - largo)/2),
                Eje_y: ((posicion.clientY))
            };

            rellenar(c, posicion_nueva.Eje_x, posicion_nueva.Eje_y, papel);

        }

    }
 
}

document.addEventListener("mousemove", marcar);
        
function marcar(posicion){
    
    var Posicion_intermedia = {
        Eje_x: ((posicion.clientX)),
        Eje_y: ((posicion.clientY)-103)
    };  

    var estilo = getComputedStyle(document.body);

    // Se obtiene la posición del Menu
    var menuY = "";
    var menuX = "";
    var radio = "";
    var ancho = "";

    for (var u = 0; u < (((estilo.getPropertyValue('--menuX')).length) - 2); u++){

        
        menuX = menuX + estilo.getPropertyValue('--menuX')[u]; 

    }

    for (var u = 0; u < (((estilo.getPropertyValue('--menuY')).length) - 2); u++){

        
        menuY = menuY + estilo.getPropertyValue('--menuY')[u]; 

    }

    for (var u = 0; u < (((estilo.getPropertyValue('--radio')).length) - 2); u++){

        
        radio = radio + estilo.getPropertyValue('--radio')[u]; 

    }

    for (var u = 0; u < (((estilo.getPropertyValue('--ancho')).length) - 2); u++){

        
        ancho = ancho + estilo.getPropertyValue('--ancho')[u]; 

    }

    //console.log("X:" + menuX);
    //console.log("Y:" + menuY);
    //console.log("X2:" + Posicion_intermedia.Eje_x);
    //console.log("Y2:" + Posicion_intermedia.Eje_y);

    let root = document.documentElement;

    root.style.setProperty('--mouseX', Posicion_intermedia.Eje_x + "px");
    root.style.setProperty('--mouseY', Posicion_intermedia.Eje_y + "px");



    var modulo = Math.sqrt( Math.pow((parseInt(menuX) - Posicion_intermedia.Eje_x + 50), 2) + Math.pow((parseInt(menuY) - Posicion_intermedia.Eje_y - 50), 2) );
    //console.log(modulo);

    if (clicking){

        if(modulo < radio && inicioMenu){

            let root = document.documentElement;

            root.style.setProperty('--menuX', (Posicion_intermedia.Eje_x - 50) + "px");
            root.style.setProperty('--menuY', (Posicion_intermedia.Eje_y + 50) + "px");

        }

        else if(estadoEsquina){

            largo = Math.abs(2*(Posicion_intermedia.Eje_x - screen.width/2));
            alto = Posicion_intermedia.Eje_y;

            papel.canvas.width = largo;
            papel.canvas.height = (alto + 103);

            indicador.innerHTML = (largo + "px. x " + (alto + 103) + "px.");

            let root = document.documentElement;

            root.style.setProperty('--movX', (largo / 2 + screen.width / 2) + "px");
            root.style.setProperty('--movY', (alto + 103) + "px");

            Limpiar();

        }

        else{

            if(Posicion_intermedia.Eje_x < (parseInt(menuX) - parseInt(ancho)) || Posicion_intermedia.Eje_y < (parseInt(menuY) - 100) || estadoMenu == false || Posicion_intermedia.Eje_x > (parseInt(menuX) + parseInt(ancho)) || Posicion_intermedia.Eje_y > parseInt(menuY) ){

                let root = document.documentElement;

                root.style.setProperty('--ancho', "5px");
                root.style.setProperty('--animacion1', "contraer1");
                root.style.setProperty('--animacion2', "contraer2");
                setTimeout(function(){ root.style.setProperty('--mostrar', "none"); }, 500);

                estadoMenu = false;

                switch (herramienta){

                    case "lapiz":
                        var posicion_nueva = {
                            Eje_x: ((posicion.clientX) - (screen.width - largo)/2),
                            Eje_y: ((posicion.clientY))
                        };

                        //console.log(posicion_nueva.Eje_x, posicion.clientX, screen.width, w);

                        Linea(c, thick, (Eje_x_viejo), (Eje_y_viejo), (posicion_nueva.Eje_x), (posicion_nueva.Eje_y), papel);   

                    break;

                    case "borrador":

                        var posicion_nueva = {
                            Eje_x: ((posicion.clientX) - (screen.width - largo)/2),
                            Eje_y: ((posicion.clientY))
                        };

                        borrar("white", thick, (posicion_nueva.Eje_x), (posicion_nueva.Eje_y), papel);   


                    break;

                    case "cubeta":

                        var posicion_nueva = {
                            Eje_x: ((posicion.clientX) - (screen.width - largo)/2),
                            Eje_y: ((posicion.clientY))
                        };

                    break;

                    default:

                        cambiar_color();

                        var posicion_nueva = {
                            Eje_x: ((posicion.clientX) - (screen.width - largo)/2),
                            Eje_y: ((posicion.clientY))
                        };
                        Linea(c, thick, (Eje_x_viejo), (Eje_y_viejo), (posicion_nueva.Eje_x), (posicion_nueva.Eje_y), papel);   

                    break;
                }

            }
        }
    }

    Eje_x_viejo = (posicion.clientX -  (screen.width - largo)/2);
    Eje_y_viejo = (posicion.clientY); 

}

botonLimpiar.addEventListener("click", Limpiar);

function Limpiar(){

    w = cuadrote.width;
    h = cuadrote.height;

    rellenarCuadro("white", w, h, papel);

}