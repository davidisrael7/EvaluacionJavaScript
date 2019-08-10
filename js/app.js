var pantalla = document.getElementById("display");
var gi_numOn = 0;
var gdc_num = 0;

var Calculadora = {
    init: function(){
        //alert("entro");
        this.of_asignaEventos();
    },

    of_asignaEventos: function(){
        document.addEventListener('mousedown', function(e){
            if(e.target.tagName == "IMG"){
                var tecla = e.target;
                tecla.style.width = (tecla.width - 2).toString() + "px";
                tecla.style.height = (tecla.height - 2).toString() + "px";
                tecla.style.marginLeft = "1px";
            }
        });

        document.addEventListener('mouseup', function(e){
            if(e.target.tagName=="IMG"){
                var tecla = e.target;
                tecla.style.width = (tecla.width + 2).toString() + "px";
                tecla.style.height = (tecla.height + 2).toString() + "px";
                tecla.style.marginLeft = "0px";
            }
        });

        document.addEventListener('click', function(e){
            if(e.target.tagName=="IMG"){
                var tecla = e.target;
                var li_cantCar = 0;

                if( parseInt(tecla.id) ){
                    if(pantalla.innerHTML.length < 8){
                        if( pantalla.innerHTML == "0" )
                            pantalla.innerHTML = tecla.id;
                        else
                            pantalla.innerHTML += tecla.id;
                    }
                }
                else if( tecla.id == "punto" ){
                    if( pantalla.innerHTML.indexOf(".") < 0 ) pantalla.innerHTML += ".";
                }
                else if( tecla.id == "on" ){
                    gi_numOn++;
                    if(gi_numOn > 1) gdc_num = 0;
                    pantalla.innerHTML = "0";
                }
                else if(tecla.id == "sign"){
                    pantalla.innerHTML = (-1 * Number( pantalla.innerHTML )).toString();
                }

                if(parseInt(pantalla.innerHTML).toString().length > 9) pantalla.innerHTML = "Cantidad muy grande";
                li_cantCar = pantalla.innerHTML.length;
                if( pantalla.innerHTML.indexOf(".") >= 0 || pantalla.innerHTML.indexOf("-") >= 0 ) li_cantCar--;
                if( li_cantCar > 8 ) pantalla.innerHTML = pantalla.innerHTML.substring(0, 8);


            }
          });
    }
}

Calculadora.init();