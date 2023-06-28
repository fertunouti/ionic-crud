

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent  implements OnInit {
  nomePortal: string;
  listaCursos!: string[];

  url: string = 'www.angular.com.br'

  cor: string ="";
  tipoUser: string ="";
  

  botaoClicado(){
    alert('Botão clicado!');
  }
click(evento:string){
  console.log (evento);
  //this.cor = (evento.target.checked?"danger":"secondary");
  switch(evento){
    case 'cliente': 
      this.cor = "success"
      this.tipoUser = "Cliente"
      break
    case 'prestador':
      this.cor = "primary"
      this.tipoUser = "Prestador"
      break
  
  }
}



  constructor(private componentService: ComponentsService) { 
    this.nomePortal = 'http://www.google.com';
   // var servico = new ComponentsService();
   this.listaCursos = this.componentService.getCursos()

    }

  ngOnInit() {}

}
