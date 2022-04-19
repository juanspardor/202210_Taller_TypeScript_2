//Importar la clase Serie
import {Serie} from './serie.js';

//Importar el arreglo de datos con las series
import {series} from './data.js';

//Obtener el body de la tabla de series
let seriesBody: HTMLElement = document.getElementById("programas")!;

//Obtener el texto donde va el promedio de temporadas
let promedioTemporadas: HTMLElement = document.getElementById("promedio")!;

//Obtener el espacio donde va la info de la serie seleccionada
let infoSerie: HTMLElement = document.getElementById("tarjetas")!;

//Calcular y poner el numero de temporadas
promedioTemporadas.innerHTML = `${promedioTemporadasSeries(series)}`;

//Carga de las series en la tabla
cargarDatosEnTabla(series);

function cargarDatosEnTabla(lista: Serie[]):void
{
    console.log("Cargando series a tabla");
    lista.forEach((serie)=>
    {
        let trElement = document.createElement("tr");
        trElement.setAttribute("class", "clickable");
        trElement.onclick = function(){poblarCard(serie.indice-1)};
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


function poblarCard(pIndice: number): void
{
    console.log("Se intento buscar la serie "+pIndice)
    let buscada: Serie = series[pIndice];
    console.log("Serie encontrada: "+buscada.name);
    let pagina = buscada.pagina;
    infoSerie.innerHTML = "";
    let cardElement = document.createElement("div");
    infoSerie.innerHTML = `<div class="card" style="width: 19rem;">
                                <img class="card-img-top" src="${buscada.foto}" alt="${buscada.name}">
                                 <div class="card-body">
                                    <h5 class="card-title">${buscada.name}</h5>
                                    <p class="card-text">${buscada.synopsis}</p>
                                    <a href= "${buscada.pagina}" target="_blank">${buscada.pagina}</a>
                                </div>
                            </div>`;
}