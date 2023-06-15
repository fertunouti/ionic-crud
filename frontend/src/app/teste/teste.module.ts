import { Read2Component } from './../read2/read2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestePageRoutingModule } from './teste-routing.module';

import { TestePage } from './teste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestePageRoutingModule
  ],
  declarations: [TestePage, Read2Component]
})
export class TestePageModule {}
