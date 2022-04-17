//Importar la clase Serie
import {Serie} from './serie.js';

//Importar el arreglo de datos con las series
import {series} from './data.js';

//Obtener el body de la tabla de series
let seriesBody: HTMLElement = document.getElementById("programas")!;

//Obtener el texto donde va el promedio de temporadas
let promedioTemporadas: HTMLElement = document.getElementById("promedio")!;
//Calcular y poner el numero de temporadas
promedioTemporadas.innerHTML = `${promedioTemporadasSeries(series)}`

//Carga de las series en la tabla
cargarDatosEnTabla(series);

function cargarDatosEnTabla(lista: Serie[]):void
{
    console.log("Cargando series a tabla");
    lista.forEach((serie)=>
    {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td class = "table-active font-weight-bold">${serie.indice}</td>
                           <td class = "table-active" style="color: #14aaf5;">${serie.name}</td>
                           <td class = "table-active">${serie.channel}</td>
                           <td class = "table-active">${serie.seasons}</td>`;
        seriesBody.appendChild(trElement);
    });
}

function promedioTemporadasSeries(lista: Serie[]):string
{
    let total:number = 0;
    lista.forEach((serie) => {total = total + serie.seasons});
    return "Seasons average: " +total/lista.length;
}