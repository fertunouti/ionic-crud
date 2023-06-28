import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { 
 
  }

  getCursos(){
    return ['Java', 'Angular', 'Ext JS']
  }
}
