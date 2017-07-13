import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThreePage } from './three';

@NgModule({
  declarations: [
    ThreePage,
  ],
  imports: [
    IonicPageModule.forChild(ThreePage),
  ],
  exports: [
    ThreePage
  ]
})
export class ThreePageModule {}
