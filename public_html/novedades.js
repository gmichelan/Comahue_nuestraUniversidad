
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
               div.append(h3);
               var ul=$(document.createElement('ul'));
               ul.attr("data-role","listview");
               div.append(ul);
               $(item.noticias).each(function(index2, item2){
                   var a= $(document.createElement('a')).text(item2.copete);
                   a.attr("href", item2.url);
                   var li= $(document.createElement('li'));
                   li.addClass('custom-centercollheaderr3');
                   li.append(a);
                   ul.append(li);
               });
           });
       }
    });
    }