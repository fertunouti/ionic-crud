import { Artigo } from './../models/Artigo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
})
export class ArtigoComponent  implements OnInit {

  @Input()
  artigo!:Artigo;

  constructor() { }

  ngOnInit() {}

}
