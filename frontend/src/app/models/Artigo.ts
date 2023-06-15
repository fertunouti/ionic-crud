import { Data } from "@angular/router";

export class Artigo{

constructor (
    public titulo: string,
    public autor: string,
    public data: string,
    public imgUrl: string,
    public texto: string
) {    }

}