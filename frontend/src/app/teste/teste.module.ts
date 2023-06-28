import { Read2Component } from './../read2/read2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestePageRoutingModule } from './teste-routing.module';

import { TestePage } from './teste.page';

import { HomePageModule } from '../home/home.module';
import { ComponentsModule } from '../components/components.module';


 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestePageRoutingModule,
    HomePageModule,
    ComponentsModule
  ],
  declarations: [TestePage, Read2Component]
})
export class TestePageModule {}
