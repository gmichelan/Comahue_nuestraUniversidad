var result = null;

function crearRequest() {

    if (window.XMLHttpRequest) {
        result = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        result = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        throw new Error("XMLHttpRequest not supported");
    }
    return result;
}


function mostrartodo() {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            var eldiv = document.getElementById("muestracalendario");
            var datos = peticion.responseText;
            //console.log(datos);
            var arr = JSON.parse(datos);
            var hoy = new Date();
            var dia1 = hoy.getDate();
            var mes1 = hoy.getMonth();
            var anio1 = hoy.getFullYear();
            var dia2 = 0;
            var mes2 = 0;
            var anio2 = 0;
            var i;
            var ent = arr[0].VCALENDAR[0].VEVENT.length;
            var titulo = "";
            var lugar = "";
            var descripcion = "";
            var inifecha = "";
            var finfecha = "";
            var inihora = "";
            var fecha = "";
            var finhora = "";
            var tempint = 0;
            var largotemp = 0;
            var out = '';
            for (i = 0; i < ent; i++) {
                titulo = arr[0].VCALENDAR[0].VEVENT[i].SUMMARY;
                descripcion = arr[0].VCALENDAR[0].VEVENT[i].DESCRIPTION;
                lugar = arr[0].VCALENDAR[0].VEVENT[i].LOCATION;
                if (titulo == "") {
                    titulo = "Sin Titulo";
                }
                if (lugar != "") {
                    lugar = '<li>Lugar: ' + lugar + '</li>';
                }
                if (descripcion != "") {
                    descripcion = "<li>Descripcion: " + descripcion + '</li>';
                }
                fecha = arr[0].VCALENDAR[0].VEVENT[i].DTSTART;
                largotemp = (fecha).length;
                dia2 = fecha[6] + fecha[7];
                mes2 = fecha[4] + fecha[5];
                anio2 = fecha[0] + fecha[1] + fecha[2] + fecha[3];
                inifecha = dia2 + '/' + mes2 + '/' + anio2;

                if (seMuestra(dia1, mes1, anio1, dia2, mes2, anio2))
                {
                    if (largotemp > 8) {
                        tempint = (parseInt(fecha[9] + fecha[10])) + 3;
                        if (tempint >= 24) {
                            tempint = tempint / 24;
                        }
                        inihora = tempint + ":" + fecha[11] + fecha[12];
                    } else {
                        inihora = 'Todo el dia';
                    }

                    fecha = arr[0].VCALENDAR[0].VEVENT[i].DTEND;
                    largotemp = (fecha).length;
                    finfecha = fecha[6] + fecha[7] + '/' + fecha[4] + fecha[5] + '/' + fecha[0] + fecha[1] + fecha[2] + fecha[3];

                    if (largotemp > 8) {
                        tempint = (parseInt(fecha[9] + fecha[10])) + 3;
                        if (tempint >= 24) {
                            tempint = tempint / 24;
                        }
                        finhora = ' - ' + tempint + ":" + fecha[11] + fecha[12];
                    } else {
                        finhora = '';
                    }
                    //Formato de salida
                    out += '<h2 title="' + titulo + '">' + inifecha + ' (' + inihora + ') ' + titulo + '</h2>' +
                            '<p><ul style="list-style: none;">' +
                            '<li>' + 'Horario: ' + inihora + finhora + '</li><li>Fecha: ' + inifecha + '</li>' + lugar + descripcion +
                            '</ul></p><hr/>';
                }
            }
            eldiv.innerHTML = out;
        }
    }
}

function start() {
    peticion = crearRequest();
    if (peticion) {
        peticion.onreadystatechange = mostrartodo;
        peticion.open("GET", "./calendar.php?param=1", true);
        peticion.overrideMimeType('application/json');
        peticion.setRequestHeader("Content-Type", "application/json");
        peticion.send();
    }
}

function seMuestra(a1, b1, c1, a2, b2, c2) {
    // 1= actual 2=evento
    var mes1 = parseInt(b1) + 1;
    var anio1 = parseInt(c1);
    var mes2 = parseInt(b2);
    var anio2 = parseInt(c2);
    sale = false;
    if (anio1 < anio2) {
        sale = true;
    }
    else {
        if (anio1 == anio2) {
            if (mes1 < mes2) {
                sale = true;
            }
            else {
                if (mes1 == mes2) {
                    if ((parseInt(a1)) <= (parseInt(a2))) {
                        sale = true;
                    }
                }
            }
        }
    }
    return sale;
}

document.addEventListener("DOMContentLoaded", function () {

    onload = start;
});


