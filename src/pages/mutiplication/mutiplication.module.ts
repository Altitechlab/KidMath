import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mutiplication } from './mutiplication';

@NgModule({
  declarations: [
    Mutiplication,
  ],
  imports: [
    IonicPageModule.forChild(Mutiplication),
  ],
  exports: [
    Mutiplication
  ]
})
export class MutiplicationModule {}
