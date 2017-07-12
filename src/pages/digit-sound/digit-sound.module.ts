import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigitSoundPage } from './digit-sound';

@NgModule({
  declarations: [
    DigitSoundPage,
  ],
  imports: [
    IonicPageModule.forChild(DigitSoundPage),
  ],
  exports: [
    DigitSoundPage
  ]
})
export class DigitSoundPageModule {}
