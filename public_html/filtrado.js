
//      $(document).on("pagebeforeshow","#buscar_carrera_nombre",function(){
//          
//        var variables=$(location).attr('search');
//        var arrVar=variables.split("=");
//        console.log(arrVar[1]);
//        console.log(variables);
//        if(arrVar[1]!="normal"){
//            $("#formularioBuscar").hide();
//            $("#divOfPs-input").val(arrVar[1]);         
//            $("#divOfPs-input").change();
//            
//        }                        
//        });

function boton(valor,numero){
    if(numero == 0){
        if(valor=="normal"){
            $("#divOfPs-input").val(""); 
            $("#formularioBuscar").show();     
            $.mobile.changePage("#buscar_carrera_nombre", { transition: "slideup", changeHash: true, reload:true});
            location.reload();
        }
        else{
            $.mobile.changePage("#buscar_carrera_nombre", { transition: "slideup", changeHash: true});
            $("#formularioBuscar").hide();
            $("#divOfPs-input").val(valor); 
            $("#divOfPs-input").change();   
        }
    }
    else{
        $.mobile.changePage("#lista_posgrado", { transition: "slideup", changeHash: true});
        $("#formularioBuscar2").hide();
        $("#entrada").val(valor); 
        $("#entrada").change();
    }
}
