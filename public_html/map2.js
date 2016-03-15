
function vermapa(valorx, valory){
    if(valorx=="" || valory==""){
        $("#divOfPs-input").val(""); 
        
        $("#formularioBuscar").hide();    
        $.mobile.changePage("#muestramapa", { transition: "slideup", changeHash: true, reload:true});
        document.getElementById("sectormapa").innerHTML = "la nada";
    }
    else{
		codemap= "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.8249928049555!2d"+ 
		valorx + 
		"!3d" + 
		valory + 
		"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2" +
		"!1s0x0%3A0x0!2sUNIVERSIDAD+NACIONAL+COMAHUE!5e0!3m2!1ses!2sar!4v1455828466022'" +
		" width='100%' height='450' frameborder='0' style='border:0' allowfullscreen></iframe>";
        $.mobile.changePage("#muestramapa", { transition: "slideup", changeHash: true});
        $("#formularioBuscar").hide();
		alert(codemap);
        document.getElementById("sectormapa").innerHTML = codemap;
		//$("#divOfPs-input").val(valor); 
        //$("#divOfPs-input").change();   
    }
}

function mostrarGoogleMaps()
         {
            //Creamos el punto a partir de las coordenadas:
            var punto = new google.maps.LatLng(40.41687477895358, -3.703308399999969);
 
            //Configuramos las opciones indicando Zoom, punto(el que hemos creado) y tipo de mapa
            var myOptions = {
            zoom: 15, center: punto, mapTypeId: google.maps.MapTypeId.ROADMAP
            };
 
            //Creamos el mapa e indicamos en qué caja queremos que se muestre
            var map = new google.maps.Map(document.getElementById("mostrarMapa"),  myOptions);
 
            //Opcionalmente podemos mostrar el marcador en el punto que hemos creado.
            var marker = new google.maps.Marker({
            position:punto,
            map: map,
            title:"Título del mapa"});
          }
			
			
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.8249928049555!2d-68.0577601707804!3d-38.939974955604924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU2JzIzLjkiUyA2OMKwMDMnMjYuMCJX!5e0!3m2!1ses!2sar!4v1455828466022" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99303.83489584978!2d-68.10254284999999!3d-38.9412346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x9e60fc4430f72077!2sUNIVERSIDAD+NACIONAL+COMAHUE!5e0!3m2!1ses!2sar!4v1454684040715" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
//
//-38.939976, -68.057213