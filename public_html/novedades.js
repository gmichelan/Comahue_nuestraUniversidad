
 function mostrarNovedades(){  
    $.mobile.changePage("#news");
    $.ajax({
       dataType:'json',
       url: 'http://conu.fi.uncoma.edu.ar/rss_calendar_uncoma/json.php',
       method: 'GET',
       success: function(response){ console.log("exitoso");
           $(response.fuentes).each(function(index, item){
               
               var div= $("<div data-role=\"collapsible\" data-inset=false>").appendTo('#novedadesId');
               var h3=$(document.createElement('h3')).text(item.nombre);
               h3.addClass('custom-centercollheader3');
               h3.enhanceWithin();
               div.addClass('margen');
               div.append(h3);
               
               $(item.noticias).each(function(index2, item2){
                   var p=$(document.createElement('p')).text(item2.titulo+'->'+item2.copete);
                   var a= $(document.createElement('a')).text('Ir a la fuente');
                   a.attr("href", item2.url);
                   p.append(a);
                   div.append(p);              
               });

           });
       }
    });
    }