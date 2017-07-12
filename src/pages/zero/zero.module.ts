import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZeroPage } from './zero';

@NgModule({
  declarations: [
    ZeroPage,
  ],
  imports: [
    IonicPageModule.forChild(ZeroPage),
  ],
  exports: [
    ZeroPage
  ]
})
export class ZeroPageModule {}
