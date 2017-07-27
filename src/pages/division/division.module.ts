import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Division } from './division';

@NgModule({
  declarations: [
    Division,
  ],
  imports: [
    IonicPageModule.forChild(Division),
  ],
  exports: [
    Division
  ]
})
export class DivisionModule {}
