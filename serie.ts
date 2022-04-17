export class Serie
{
    indice: number;
    name: string;
    channel: string;
    seasons: number;
    synopsis: string;
    pagina: string;
    foto: string;

    constructor(pIndice: number, pName: string, pChannel: string, pSeasons: number, pSynopsis: string, pPagina: string, pFoto: string)
    {
        this.indice = pIndice;
        this.name = pName;
        this.channel = pChannel;
        this.seasons = pSeasons;
        this.synopsis = pSynopsis;
        this.pagina = pPagina;
        this.foto = pFoto;
    }
}