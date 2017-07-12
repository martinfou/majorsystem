import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnePage } from './one';

@NgModule({
  declarations: [
    OnePage,
  ],
  imports: [
    IonicPageModule.forChild(OnePage),
  ],
  exports: [
    OnePage
  ]
})
export class OnePageModule {}
