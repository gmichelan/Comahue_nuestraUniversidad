      $(document).on("pageshow","#buscar_carrera_nombre" ,function(){
        var variables=$(location).attr('search');
        var arrVar=variables.split("=");
        console.log(arrVar[1]);
        console.log(variables);
        if(arrVar[1]!="normal"){
            $("#formularioBuscar").hide();
            $("#divOfPs-input").val(arrVar[1]);         
            $("#divOfPs-input").change();
            
        }                        
        });


