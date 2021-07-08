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

    var pixel_inicial = papel.getImageData(Eje_x, Eje_y, 1, 1);

    var paso = 0;

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

            Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
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
    
                Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            }
    
    
        }

        ca = actualizarColor(h, k);

        if( paso < 3 ){

            if(ca != ci){

                operar = false;

                paso = 0;
    
            }

        }
        else {

            paso+= 1;

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

            Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            h += 1;
    
            ca = actualizarColor(h, k);
    
            if(ca != ci){
    
                operarAbajo = false;
                operarArriba = true;

                k += 1;
                h += (-1 + paso);

            }
    
    
        }
    
        while(operarArriba){
    
            h += -1;
    
            ca = actualizarColor(h, k);
    
            if(ca != ci){
    
                operarArriba = false;
                operarAbajo = true;

                k += 1;
                h += 1;
    
            }
            else{
    
                Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            }
    
    
        }

        ca = actualizarColor(h, k);

        if( paso < -3 ){

            if(ca != ci){

                operar = false;

                paso = 0;
    
            }

        }
        else {

            paso+= -1;

        }

    }

    //EXPERIMENTAL

    var h = 0;

    var k = 0;

    var operar = true;
    var operarArriba = true;
    var operarAbajo = true;
    
    while(operar){
    
        while(operarArriba){
    
            k += -1;
    
            ca = actualizarColor(h, (k-1));
    
            if(ca != ci){
    
                operarArriba = false;
                operarAbajo = true;

                h += -1;
                k += 1;
    
            }
            else{
    
                Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            }
    
    
        }

        while(operarAbajo){

            Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            k += 1;
    
            ca = actualizarColor(h, k);
    
            if(ca != ci){
    
                operarAbajo = false;
                operarArriba = true;

                h += -1;
                k += -1;

            }
    
    
        }

        ca = actualizarColor(h, k);

        if(ca != ci){

            operar = false;

        }

    }

    var operar = true;
    var operarIzquierda = true;
    var operarDerecha = true;

    k += 2;

    ca = actualizarColor(h, k);

    if(ca != ci){

        k += -4;

    }

    while(operar){

        while(operarIzquierda){
    
            h += -1;
    
            ca = actualizarColor(h, k);
    
            if(ca != ci){
    
                operarIzquierda = false;
                operarDerecha = true;

                k += -2;
                h += 4 + paso;

              
            }
            else{
    
                Linea(color, 2, Eje_x+h+1, Eje_y+k, Eje_x+h+2, Eje_y+k, papel);
    
            }
    
    
        }
    
        while(operarDerecha){
    
            h += 1;
    
            ca = actualizarColor(h, k);
    
            if(ca != ci){
    
                operarDerecha = false;
                operarIzquierda = true;

                k += -2;
                h += -1;

  
    
            }
            else{
    
                Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k, papel);
    
            }
    
    
        }

        ca = actualizarColor(h, k);
        
        if(paso > 4){

            if(ca != ci){

                operar = false;
    
            }

        }
        else {

            paso+= 1;

        }

    }

}