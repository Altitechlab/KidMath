import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Addition } from './addition';

@NgModule({
  declarations: [
    Addition,
  ],
  imports: [
    IonicPageModule.forChild(Addition),
  ],
  exports: [
    Addition
  ]
})
export class AdditionModule {}
