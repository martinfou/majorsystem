import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DigitSoundDetailsPage } from '../digit-sound-details/digit-sound-details';

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
      associatedLetters: 'Z, S, soft-c',
      mnemonics: 'Zero begins with z (and /z/). Upper case S and Z, as well as lower case s and z, have zero vertical strokes each, as with the numeral 0. The alveolar fricatives /s/ and /z/ form a voiceless and voiced pair.'
    },
    {
      id: '1',
      associatedLetters: 'D, T',
      mnemonics: 'Upper case T and D, as well as lower case t and d have one vertical stroke each, as with the numeral 1. The alveolar stops /t/ and /d/ form a voiceless and voiced pair, as do the similar-sounding dental fricatives /θ/ and /ð/, though some variant systems may omit the latter pair.'
    },
    {
      id: '2',
      associatedLetters: 'N',
      mnemonics: 'Upper case N and lower case n each have two vertical strokes and two points on the baseline.'
    },
    {
      id: '3',
      associatedLetters: 'M'
    },
    {
      id: '4',
      associatedLetters: 'R'
    },
    {
      id: '5',
      associatedLetters: 'L'
    },
    {
      id: '6',
      associatedLetters: 'J, SH, soft-G'
    },
    {
      id: '7',
      associatedLetters: 'K, Q, hard-c, hard-G'
    },
    {
      id: '8',
      associatedLetters: 'F, V'
    },
    {
      id: '9',
      associatedLetters: 'P, B'
    }
  ]

  itemSelected(item) {
    console.log(item);
    this.navCtrl.push(DigitSoundDetailsPage, item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DigitSoundPage');
  }
}