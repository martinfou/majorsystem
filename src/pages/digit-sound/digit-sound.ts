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
      associatedLetters: 'M',
      mnemonics: 'Lower case m has three vertical strokes. Both upper case M and lower case m each have three points on the baseline and look like the numeral 3 on its side.'
    },
    {
      id: '4',
      associatedLetters: 'R',
      mnemonics: '	Four ends with r (and /r/ in rhotic accents).'
    },
    {
      id: '5',
      associatedLetters: 'L',
      mnemonics: 'L is the Roman numeral for 50. Among the five digits of one\'s left hand, the thumb and index fingers also form an L.'
    },
    {
      id: '6',
      associatedLetters: 'J, SH, soft-G',
      mnemonics: 'Upper case G and lower case g look like the numeral 6 flipped horizontally and rotated 180° respectively. Lower case script j tends to have a lower loop, like the numeral 6. In some serif fonts, upper case CH, SH and ZH each have six serifs. The postalveolar affricates /tʃ/ and /dʒ/ form a voiceless and voiced pair, as do the similar-sounding postalveolar fricatives /ʃ/ and /ʒ/.'
    },
    {
      id: '7',
      associatedLetters: 'K, Q, hard-c, hard-G',
      mnemonics: 'Both upper case K and lower case k look like two small 7s on their sides. In some fonts, the lower-right part of the upper case G looks like a 7. The velar stops /k/ and /g/ form a voiceless and voiced pair.'
    },
    {
      id: '8',
      associatedLetters: 'F, V',
      mnemonics: 'Lower case script f, which tends to have an upper and lower loop, looks like a figure-8. The labiodental fricatives /f/ and /v/ form a voiceless and voiced pair.'
    },
    {
      id: '9',
      associatedLetters: 'P, B',
      mnemonics: 'Upper case P and lower case p look like the numeral 9 flipped horizontally. Lower case b looks like the numeral 9 turned 180°. The labial stops /p/ and /b/ form a voiceless and voiced pair.'
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