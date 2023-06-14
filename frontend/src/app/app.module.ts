import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductCrudComponent,
   
  ],
  
  
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule
  
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
