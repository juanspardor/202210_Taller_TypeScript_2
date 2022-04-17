//Importar el arreglo de datos con las series
import { series } from './data.js';
//Obtener el body de la tabla de series
var seriesBody = document.getElementById("programas");
//Obtener el texto donde va el promedio de temporadas
var promedioTemporadas = document.getElementById("promedio");
//Calcular y poner el numero de temporadas
promedioTemporadas.innerHTML = "".concat(promedioTemporadasSeries(series));
//Carga de las series en la tabla
cargarDatosEnTabla(series);
function cargarDatosEnTabla(lista) {
    console.log("Cargando series a tabla");
    lista.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class = \"table-active font-weight-bold\">".concat(serie.indice, "</td>\n                           <td class = \"table-active\" style=\"color: #14aaf5;\">").concat(serie.name, "</td>\n                           <td class = \"table-active\">").concat(serie.channel, "</td>\n                           <td class = \"table-active\">").concat(serie.seasons, "</td>");
        seriesBody.appendChild(trElement);
    });
}
function promedioTemporadasSeries(lista) {
    var total = 0;
    lista.forEach(function (serie) { total = total + serie.seasons; });
    return "Seasons average: " + total / lista.length;
}
