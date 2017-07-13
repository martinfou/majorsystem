import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoPage } from './two';

@NgModule({
  declarations: [
    TwoPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoPage),
  ],
  exports: [
    TwoPage
  ]
})
export class TwoPageModule {}
