function rellenar(color, Eje_x, Eje_y, papel){

    function actualizarColor(h, k){

        var pixel_actual = papel.getImageData(Eje_x+h, Eje_y+k, 1, 1);

        var ca = "#";

        for (var x = 0; x<3; x++) {

            y = pixel_actual.data[x];

            hex = (parseInt(y)).toString(16);

            if (hex.length == 1) {

                ca += "0";

            }

            ca += hex;

        }
            
        ca = ca.toUpperCase();

        return ca;

    }

    var algoritmo = 1;

    var coorDob = {
        x: 0,
        y: 0
    }

    var pixel_inicial = papel.getImageData(Eje_x, Eje_y, 1, 1);

    var patron = [-1, 0, +1, 0, -1];
    var patronY = [-2, 0, +2, 0, -2];

    var paso = 0;

    var pared = 0;

    var ciclo = 0;

    var h = 0;

    var k = 0;

    var ci = "#";

    var operar = true;
    var operarArriba = true;
    var operarAbajo = true;

    for (var x = 0; x<3; x++) {

        var y = pixel_inicial.data[x];

        var hex = (parseInt(y)).toString(16);

        if (hex.length == 1) {

            ci += "0";

        }

        ci += hex;

    }
        
    ci = ci.toUpperCase();
    
    while(operar){

        while(operarAbajo){

            Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+0.5, Eje_y+k, papel);
            Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+0.5, Eje_y+k, papel);
    
            k += 1;
    
            ca = actualizarColor(h, k);
    
            if(ca != ci){
    
                operarAbajo = false;
                operarArriba = true;

                h += 1;
                k += -1;

            }
    
    
        }
    
        while(operarArriba){
    
            k += -1;
    
            ca = actualizarColor(h, (k - 1));
    
            if(ca != ci){
    
                operarArriba = false;
                operarAbajo = true;

                h += 1;
                k += 1;
    
            }
            else{
    
                Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+0.5, Eje_y+k, papel);
                Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+0.5, Eje_y+k, papel);
    
            }
    
    
        }

        ca = actualizarColor(h, k);

        if(ca != ci){

            operar = false;

        }

    }

    var operar = true;
    var operarArriba = true;
    var operarAbajo = true;

    k += 2;

    ca = actualizarColor(h, k);

    if(ca != ci){

        k += -4;

    }

    while(operar){

        while(operarAbajo){

            Linea(color, 1, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            h += 1;
    
            ca = actualizarColor(h, k);
    
            if(ca != ci){
    
                operarAbajo = false;
                operarArriba = true;

                k += 1;
                h += -2;

            }
    
    
        }
    
        while(operarArriba){
    
            h += -1;
    
            ca = actualizarColor((h - 1), k);
    
            if(ca != ci){
    
                operarArriba = false;
                operarAbajo = true;

                k += 1;
                h += 2;
    
            }
            else{
    
                Linea(color, 1, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            }
    
    
        }

        ca = actualizarColor(h, k);

        if(ca != ci){

            operar = false;

        }

    }
    
    /*

    while(operar){

        pared = 0;

        console.log(patron[paso%4], patron[paso%4+1]);

        ca = actualizarColor((h + patron[paso%4]), (k + (patronY[paso%4 + 1])));

        if(ca == ci){

            h += patron[paso%4];
            k += (patronY[paso%4 + 1]);

            Linea(color, 1, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);

        }

        else{

            multiplicador++; //Tratar de incrementar el largo del paso cuando entra en un cierre

        }

        if (ciclo == 3000){

            operar = false;

        }

        ciclo++;

        console.log("h:", h, " k:", k, " paso:", paso, " pared:", pared);

        paso++;

    }

    */

}