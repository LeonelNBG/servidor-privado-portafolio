function rellenar(color, Eje_x, Eje_y, papel){

    var algoritmo = 1;

    var pixel_inicial = papel.getImageData(Eje_x, Eje_y, 1, 1);

    var id_color_inicial = ("#" + parseInt((pixel_inicial.data[0]/255)*99) + parseInt((pixel_inicial.data[1]/255)*99) + parseInt((pixel_inicial.data[2]/255)*99));

    var h = 0;

    var k = 0;

    var pixel_actual = papel.getImageData(Eje_x+h, Eje_y+k, 1, 1);

    var id_color_actual = ("#" + parseInt((pixel_actual.data[0]/255)*99) + parseInt((pixel_actual.data[1]/255)*99) + parseInt((pixel_actual.data[2]/255)*99));

    if(color != id_color_inicial){

            var h = 0;

            var k = 0;

            var contador = 0;

            while (id_color_inicial == id_color_actual){

                k = k+1;

                var pixel_actual = papel.getImageData(Eje_x+h, Eje_y+k, 1, 1);

                var id_color_actual = ("#" + parseInt((pixel_actual.data[0]/255)*99) + parseInt((pixel_actual.data[1]/255)*99) + parseInt((pixel_actual.data[2]/255)*99));

            }

            k = k-1;

            while (contador < 8){

                var pixel_actual = papel.getImageData(Eje_x+h, Eje_y+k, 1, 1);

                var id_color_actual = ("#" + parseInt((pixel_actual.data[0]/255)*99) + parseInt((pixel_actual.data[1]/255)*99) + parseInt((pixel_actual.data[2]/255)*99));

                Linea(color, 2, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k+1, papel);

                var pixel_abajo =  papel.getImageData(Eje_x+h, Eje_y+k+1, 1, 1);
                var id_color_abajo = ("#" + parseInt((pixel_abajo.data[0]/255)*99) + parseInt((pixel_abajo.data[1]/255)*99) + parseInt((pixel_abajo.data[2]/255)*99));

                var pixel_derecha =  papel.getImageData(Eje_x+h+1, Eje_y+k, 1, 1);
                var id_color_derecha = ("#" + parseInt((pixel_derecha.data[0]/255)*99) + parseInt((pixel_derecha.data[1]/255)*99) + parseInt((pixel_derecha.data[2]/255)*99));

                var pixel_arriba =  papel.getImageData(Eje_x+h, Eje_y+k-1, 1, 1);
                var id_color_arriba = ("#" + parseInt((pixel_arriba.data[0]/255)*99) + parseInt((pixel_arriba.data[1]/255)*99) + parseInt((pixel_arriba.data[2]/255)*99));

                var pixel_izquierda =  papel.getImageData(Eje_x+h-1, Eje_y+k, 1, 1);
                var id_color_izquierda = ("#" + parseInt((pixel_izquierda.data[0]/255)*99) + parseInt((pixel_izquierda.data[1]/255)*99) + parseInt((pixel_izquierda.data[2]/255)*99));

                var pixel_abajo_izquierda =  papel.getImageData(Eje_x+h-1, Eje_y+k+1, 1, 1);
                var id_color_abajo_izquierda = ("#" + parseInt((pixel_abajo_izquierda.data[0]/255)*99) + parseInt((pixel_abajo_izquierda.data[1]/255)*99) + parseInt((pixel_abajo_izquierda.data[2]/255)*99));

                var pixel_abajo_derecha =  papel.getImageData(Eje_x+h+1, Eje_y+k+1, 1, 1);
                var id_color_abajo_derecha = ("#" + parseInt((pixel_abajo_derecha.data[0]/255)*99) + parseInt((pixel_abajo_derecha.data[1]/255)*99) + parseInt((pixel_abajo_derecha.data[2]/255)*99));

                var pixel_arriba_derecha =  papel.getImageData(Eje_x+h+1, Eje_y+k-1, 1, 1);
                var id_color_arriba_derecha = ("#" + parseInt((pixel_arriba_derecha.data[0]/255)*99) + parseInt((pixel_arriba_derecha.data[1]/255)*99) + parseInt((pixel_arriba_derecha.data[2]/255)*99));

                var pixel_arriba_izquierda =  papel.getImageData(Eje_x+h-1, Eje_y+k-1, 1, 1);
                var id_color_arriba_izquierda = ("#" + parseInt((pixel_arriba_izquierda.data[0]/255)*99) + parseInt((pixel_arriba_izquierda.data[1]/255)*99) + parseInt((pixel_arriba_izquierda.data[2]/255)*99));




                switch (algoritmo){

                    case 1:
                    if(id_color_abajo == id_color_inicial){

                        h = h;
                        k = k+1;

                    }

                    else if(id_color_abajo_derecha == id_color_inicial){

                        h = h+1;
                        k = k+1;

                    }

                    else if(id_color_derecha == id_color_inicial){

                        h = h+1;
                        k = k;

                    }

                    else if(id_color_arriba_derecha == id_color_inicial){

                        h = h+1;
                        k = k-1;

                    }

                    else if(id_color_arriba == id_color_inicial){

                        h = h;
                        k = k-1;

                    }

                    else if(id_color_arriba_izquierda == id_color_inicial){

                        h = h-1;
                        k = k-1;

                    }

                    else if(id_color_izquierda == id_color_inicial){

                        h = h-1;
                        k = k;

                    }

                    else if(id_color_abajo_izquierda == id_color_inicial){

                        h = h-1;
                        k = k+1;
                        algoritmo = 2;

                    }

                    else {

                        contador++;
                        algoritmo = 3;
                        console.log(algoritmo);

                    }
                    break;

                    case 2:
                        if(id_color_abajo_derecha == id_color_inicial){

                            h = h+1;
                            k = k+1;
    
                        }
    
                        else if(id_color_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k;
    
                        }
    
                        else if(id_color_arriba_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k-1;
    
                        }
    
                        else if(id_color_arriba == id_color_inicial){
    
                            h = h;
                            k = k-1;
    
                        }
    
                        else if(id_color_arriba_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k-1;
    
                        }
    
                        else if(id_color_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k;
    
                        }
    
                        else if(id_color_abajo_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k+1;
    
                        }

                        else if(id_color_abajo == id_color_inicial){

                            h = h;
                            k = k+1;

                            algoritmo = 3;

                
                        }
        
                        else {

                            contador++;
                            algoritmo = 4;
                            console.log(algoritmo);
        
                        }
                    break;

                    case 3:
                        if(id_color_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k;
    
                        }
    
                        else if(id_color_arriba_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k-1;
    
                        }
    
                        else if(id_color_arriba == id_color_inicial){
    
                            h = h;
                            k = k-1;
    
                        }
    
                        else if(id_color_arriba_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k-1;
    
                        }
    
                        else if(id_color_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k;
    
                        }
    
                        else if(id_color_abajo_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k+1;
    
                        }

                        else if(id_color_abajo == id_color_inicial){

                            h = h;
                            k = k+1;
                
                        }

                        else if(id_color_abajo_derecha == id_color_inicial){

                            h = h+1;
                            k = k+1;

                            algoritmo = 4;
    
                        }
        
                        else{

                            contador++;
                            algoritmo = 5;
                            console.log(algoritmo);
        
                        }
                    break;

                    case 4:

                        if(id_color_arriba_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k-1;
    
                        }
    
                        else if(id_color_arriba == id_color_inicial){
    
                            h = h;
                            k = k-1;
    
                        }
    
                        else if(id_color_arriba_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k-1;
    
                        }
    
                        else if(id_color_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k;
    
                        }
    
                        else if(id_color_abajo_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k+1;
    
                        }

                        else if(id_color_abajo == id_color_inicial){

                            h = h;
                            k = k+1;
                
                        }

                        else if(id_color_abajo_derecha == id_color_inicial){

                            h = h+1;
                            k = k+1;
    
                        }

                        else if(id_color_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k;

                            algoritmo = 5;
    
                        }
    
                        
            
                        else {
            
                            contador++;
                            algoritmo = 6;
                            console.log(algoritmo);
            
                        }
                    break;

                    case 5:

                        if(id_color_arriba == id_color_inicial){
    
                            h = h;
                            k = k-1;
    
                        }
    
                        else if(id_color_arriba_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k-1;
    
                        }
    
                        else if(id_color_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k;
    
                        }
    
                        else if(id_color_abajo_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k+1;
    
                        }

                        else if(id_color_abajo == id_color_inicial){

                            h = h;
                            k = k+1;
                
                        }

                        else if(id_color_abajo_derecha == id_color_inicial){

                            h = h+1;
                            k = k+1;
    
                        }

                        else if(id_color_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k;

                        }
                        
                        else if(id_color_arriba_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k-1;

                            algoritmo = 6;
    
                        }
            
                        else {
            
                            contador++;
                            algoritmo = 7;
                            console.log(algoritmo);
            
                        }
                    break;

                    case 6:

                        if(id_color_arriba_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k-1;
    
                        }
    
                        else if(id_color_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k;
    
                        }
    
                        else if(id_color_abajo_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k+1;
    
                        }

                        else if(id_color_abajo == id_color_inicial){

                            h = h;
                            k = k+1;
                
                        }

                        else if(id_color_abajo_derecha == id_color_inicial){

                            h = h+1;
                            k = k+1;
    
                        }

                        else if(id_color_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k;

                        }
                        
                        else if(id_color_arriba_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k-1;

                        }
                        
                        else if(id_color_arriba == id_color_inicial){
    
                            h = h;
                            k = k-1;

                            algoritmo = 7;
    
                        }
    
            
                        else {
            
                            contador++;
                            algoritmo = 8;
                            console.log(algoritmo);
            
                        }
                    break;

                    case 7:

                        if(id_color_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k;
    
                        }
    
                        else if(id_color_abajo_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k+1;
    
                        }

                        else if(id_color_abajo == id_color_inicial){

                            h = h;
                            k = k+1;
                
                        }

                        else if(id_color_abajo_derecha == id_color_inicial){

                            h = h+1;
                            k = k+1;
    
                        }

                        else if(id_color_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k;

                        }
                        
                        else if(id_color_arriba_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k-1;

                        }
                        
                        else if(id_color_arriba == id_color_inicial){
    
                            h = h;
                            k = k-1;
    
                        }
                        
                        else if(id_color_arriba_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k-1;

                            algoritmo = 8;
    
                        }
            
                        else {
            
                            contador++;
                            algoritmo = 1;
                            console.log(algoritmo);
            
                        }
                    break;

                    case 7:

                        if(id_color_abajo_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k+1;
    
                        }

                        else if(id_color_abajo == id_color_inicial){

                            h = h;
                            k = k+1;
                
                        }

                        else if(id_color_abajo_derecha == id_color_inicial){

                            h = h+1;
                            k = k+1;
    
                        }

                        else if(id_color_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k;

                        }
                        
                        else if(id_color_arriba_derecha == id_color_inicial){
    
                            h = h+1;
                            k = k-1;

                        }
                        
                        else if(id_color_arriba == id_color_inicial){
    
                            h = h;
                            k = k-1;
    
                        }
                        
                        else if(id_color_arriba_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k-1;
    
                        }

                        
                        else if(id_color_izquierda == id_color_inicial){
    
                            h = h-1;
                            k = k;

                            algoritmo = 1;
    
                        }
            
                        else {
            
                            contador++;
                            algoritmo = 2;
                            console.log(algoritmo);
            
                        }
                    break;

        

            }

            Linea("red", 1, Eje_x+h, Eje_y+k, Eje_x+h+1, Eje_y+k+1, papel);

        }

    }

    else{

        alert("XD");

    }

}