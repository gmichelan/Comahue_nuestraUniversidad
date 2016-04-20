
 function mostrarNovedades(){  
    $.mobile.changePage("#news");
    $.ajax({
       dataType:'json',
       url: 'json.php',
       success: function(response){ 
           $(response.fuentes).each(function(index, item){
               var div= $("<div data-role=\"collapsible\" data-inset=false>").appendTo('#novedadesId');
               var h3=$(document.createElement('h3')).text(item.nombre);
               h3.addClass('custom-centercollheader3');
               h3.enhanceWithin();
               div.addClass('margen');
               div.append(h3);
               
               //var ul=$(document.createElement('ul'));
               //ul.attr("data-role","listview");
              // div.append(ul);
               $(item.noticias).each(function(index2, item2){
                   var p=$(document.createElement('p')).text(item2.titulo+'->'+item2.copete);
                   var a= $(document.createElement('a')).text('Ir a la fuente');
                   a.attr("href", item2.url);
                   p.append(a);
                   div.append(p);
                   
                   
//                   var li= $(document.createElement('li'));
//                   li.addClass('custom-centercollheaderr3');
//                   li.append(a);
//                   ul.append(li);
               });
 
               //div.enhanceWithin();
           });
       }
    });
    }