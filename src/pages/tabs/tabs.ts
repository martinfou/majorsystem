import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DigitSoundPage } from '../digit-sound/digit-sound';
import { DictionaryPage } from '../dictionary/dictionary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DictionaryPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = DigitSoundPage;

  constructor() {

  }
}
