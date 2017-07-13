import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DigitSoundDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-digit-sound-details',
  templateUrl: 'digit-sound-details.html',
})
export class DigitSoundDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  id: string = this.navParams.get('id');
  associatedLetters: string = this.navParams.get('associatedLetters');
  mnemonics: string = this.navParams.get('mnemonics');
  ionViewDidLoad() {
    console.log('ionViewDidLoad DigitSoundDetailsPage');
  }

}
