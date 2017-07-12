import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZeroPage } from '../zero/zero';
import { OnePage } from '../one/one';
/**
 * Generated class for the DigitSoundPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-digit-sound',
  templateUrl: 'digit-sound.html',
})
export class DigitSoundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    {
      id: '0',
      description: 'Z,S, soft-c'
    },
    { 
      id: '1',
      description: 'D, T'
    },
    { 
      id: '2',
      description: 'N'
    }
  ]

itemSelected(item){
  console.log(item);
  if(item.id==='0'){
    this.navCtrl.push(ZeroPage);
  }else if (item.id==='1'){
    this.navCtrl.push(OnePage);
  }
 
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad DigitSoundPage');
  }

}
