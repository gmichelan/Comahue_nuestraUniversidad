function radamap2(latitud, longitud, nombre, direc){
	map = new GMaps({
  div: '#mostrarMapa',
  lat: latitud,
  lng: longitud
});
map.addMarker({
        lat: latitud,
        lng: longitud,
        title: nombre,
        infoWindow: {
          content: '<p style=\'color:blue;\'>' + nombre + '</p>' + '<p>' + direc + '</p>'
        }
      });
}

function sad(){
	alert("algo");
}

function vermapa2(latitud, longitud, nombre, direc){
    if(latitud=="" || longitud==""){
        $("#divOfPs-input").val(""); 
        
        $("#formularioBuscar").hide();    
        $.mobile.changePage("../index.html#muestramapa", { transition: "slideup", changeHash: true, reload:true});
    }
    else{
        console.log("Entro al else");
        $("#muestramapa").on("pageshow", function(event, ui){radamap2(latitud, longitud, nombre, direc);});
        $.mobile.changePage("../index.html#muestramapa", { transition: "slideup", changeHash: true});
		
        //$("#formularioBuscar").hide();
		
		/*var textoaux = '<a onclick="radamap(' + latitud + ', ' + longitud + ', \'' + nombre + '\', \'' + direc + '\')"><h2>Mostrar Mapa</h2></a>';
		document.getElementById("antesmap").innerHTML = textoaux;
		document.getElementById("mostrarMapa").innerHTML = "";
		document.getElementById("mostrarMapa").style.backgroundColor = "transparent";
		document.getElementById("despuesmap").innerHTML = "<hr>";*/		
	
    }
}
