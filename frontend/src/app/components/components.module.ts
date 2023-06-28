import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentsService } from './components.service';




@NgModule({
  declarations: [
    DataBindingComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DataBindingComponent,
    
  ],
  providers: [ComponentsService]
})
export class ComponentsModule { }
