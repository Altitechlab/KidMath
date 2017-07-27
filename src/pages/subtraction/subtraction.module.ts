import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Subtraction } from './subtraction';

@NgModule({
  declarations: [
    Subtraction,
  ],
  imports: [
    IonicPageModule.forChild(Subtraction),
  ],
  exports: [
    Subtraction
  ]
})
export class SubtractionModule {}
