import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DictionaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html',
})
export class DictionaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    {
      id: '0',
      associatedWord: 'saw',
      associatedImage: 'assets/img/saw.jpg'
    },
    {
      id: '1',
      associatedWord: 'tea',
      associatedImage: 'assets/img/tea.jpg'
    },
    {
      id: '2',
      associatedWord: 'honney',
      associatedImage: 'assets/img/honney.jpg'
    }
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad DictionaryPage');
  }

}
