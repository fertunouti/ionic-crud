import { Component } from '@angular/core';
import {Router} from'@angular/router'
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

}
