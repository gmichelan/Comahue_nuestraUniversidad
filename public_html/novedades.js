
 function mostrarNovedades(){
    
    $.mobile.changePage("#news");
    $.ajax({
        
        url: 'json.php',
        success: function (response) {
            console.log(response);
            var ul = $('<ul data-role="listview">').appendTo('#novedadesId');
            $(response.fuentes).each(function (index, item) {
                var li= $(document.createElement('li'));
                li.attr("data-role","collapsible");
                var h3= $(document.createElement('h3')).text(item.nombre);
                h3.addClass("custom-centercollheader3");
                li.append(h3);
                var ul2= $(document.createElement('ul'));
                ul2.attr("data-role", "listview");
                li.append(ul2);
                $(item.noticias).each(function (index2, item2){
                    var a= $(document.createElement('a')).text(item2.copete);
                    a.attr("href",item2.url);
                    var li2= $(document.createElement('li'));
                    li2.append(a);
                    li2.addClass('custom-centercollheaderr3');
                    ul2.append(li2);
                });
                ul.append(li);
            });
        }
    });
    
//    
//      $.ajax({
//        
//        url: 'json.php',
//        success: function (response) {
//            console.log(response);
//            var ul = $('<ul data-role="listview">').appendTo('#novedadesId');
//            $(response.fuentes).each(function (index, item) {
//                ul.append($(document.createElement('li')).text(item.nombre);
//                //ul.append($(document.createElement('li')).text(item.nombre).);
//                $(item.noticias).each(function(index2, item2){
//                    ul.append($(document.createElement('li')).text(item2.titulo+item2.copete));
//                });    
//            });
//        }
//    });
//    
//    
    
    
    
    
    
    
    
    
    
//     $.ajax({
//        
//        url: 'json.php',
//        success: function (response) {
//            //console.log(response);
//            var ul= '<ul data-role="listview">';
//            var ul = $('<ul data-role="listview">').appendTo('#novedadesId');
//            console.log("primer  "+ul);
//            $(response.fuentes).each(function (index, item) {
//                ul=ul+'<li data-role="collapsible">\n<h3 class="custom-centercollheader3">'+item.nombre+'</h3>\n<ul data-role="listview">';
//                //ul.append('<li data-role="collapsible">\n<h3 class="custom-centercollheader3">'+item.nombre+'</h3>\n<ul data-role="listview">');
//                $(item.noticias).each(function(index2, item2){
//                    ul=ul+'<li class="custom-centercollheaderr3"><a href="'+item2.url+'">'+item2.copete+'</a></li>';
//                    //ul.append('<li class="custom-centercollheaderr3"><a href="'+item2.url+'">'+item2.copete+'</a></li>');
//                });
//                ul=ul+'</ul></li>';
//                //ul.append('</ul></li>');
//            });
//            ul=ul+'</ul>';
//            //ul.append('</ul>');
//            console.log(ul);
//        }
//    });
   
    }
    
    
//    
//    <ul data-role="listview">
//  <li data-role="collapsible" data-iconpos="right" data-inset="false">
//    <h2>Birds</h2>
//    <ul data-role="listview" data-theme="b">
//      <li><a href="#">Condor</a></li>
//      <li><a href="#">Eagle</a></li>
//      <li><a href="#">Sparrow</a></li>
//    </ul>
//  </li>
//  <li><a href="#">Humans</a></li>
//  <li data-role="collapsible" data-iconpos="right" data-inset="false">
//    <h2>Fish</h2>
//    <ul data-role="listview" data-theme="b">
//      <li><a href="#">Salmon</a></li>
//      <li><a href="#">Pollock</a></li>
//      <li><a href="#">Trout</a></li>
//    </ul>
//  </li>
//</ul>