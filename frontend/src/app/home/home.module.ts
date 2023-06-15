
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ArtigoComponent } from '../artigo/artigo.component';
import { ProductReadComponent } from '../components/product/product-read/product-read.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
    
    
  ],
  declarations: [HomePage,ArtigoComponent,ProductReadComponent]
})
export class HomePageModule {}
