import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Levelscreen } from './levelscreen';

@NgModule({
  declarations: [
    Levelscreen,
  ],
  imports: [
    IonicPageModule.forChild(Levelscreen),
  ],
  exports: [
    Levelscreen
  ]
})
export class LevelscreenModule {}
