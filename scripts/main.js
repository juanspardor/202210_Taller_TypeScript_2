//Importar el arreglo de datos con las series
import { series } from './data.js';
//Obtener el body de la tabla de series
var seriesBody = document.getElementById("programas");
//Obtener el texto donde va el promedio de temporadas
var promedioTemporadas = document.getElementById("promedio");
//Obtener el espacio donde va la info de la serie seleccionada
var infoSerie = document.getElementById("tarjetas");
//Calcular y poner el numero de temporadas
promedioTemporadas.innerHTML = "".concat(promedioTemporadasSeries(series));
//Carga de las series en la tabla
cargarDatosEnTabla(series);
function cargarDatosEnTabla(lista) {
    console.log("Cargando series a tabla");
    lista.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("class", "clickable");
        trElement.onclick = function () { poblarCard(serie.indice - 1); };
        trElement.innerHTML = "<td class = \"table-active font-weight-bold\">".concat(serie.indice, "</td>\n                           <td class = \"table-active\" style=\"color: #14aaf5;\">").concat(serie.name, "</td>\n                           <td class = \"table-active\">").concat(serie.channel, "</td>\n                           <td class = \"table-active\">").concat(serie.seasons, "</td>");
        seriesBody.appendChild(trElement);
    });
}
function promedioTemporadasSeries(lista) {
    var total = 0;
    lista.forEach(function (serie) { total = total + serie.seasons; });
    return "Seasons average: " + total / lista.length;
}
function poblarCard(pIndice) {
    console.log("Se intento buscar la serie " + pIndice);
    var buscada = series[pIndice];
    console.log("Serie encontrada: " + buscada.name);
    var pagina = buscada.pagina;
    infoSerie.innerHTML = "";
    var cardElement = document.createElement("div");
    infoSerie.innerHTML = "<div class=\"card\" style=\"width: 19rem;\">\n                                <img class=\"card-img-top\" src=\"".concat(buscada.foto, "\" alt=\"").concat(buscada.name, "\">\n                                 <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(buscada.name, "</h5>\n                                    <p class=\"card-text\">").concat(buscada.synopsis, "</p>\n                                    <a href= \"").concat(buscada.pagina, "\" target=\"_blank\">").concat(buscada.pagina, "</a>\n                                </div>\n                            </div>");
}
