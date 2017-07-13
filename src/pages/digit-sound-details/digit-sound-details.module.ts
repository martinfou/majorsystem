import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigitSoundDetailsPage } from './digit-sound-details';

@NgModule({
  declarations: [
    DigitSoundDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DigitSoundDetailsPage),
  ],
  exports: [
    DigitSoundDetailsPage
  ]
})
export class DigitSoundDetailsPageModule {}
