import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditPage');
  }

  likeFacebookPage(){
    window.open("https://facebook.com/tech.simdanger");
  }

  subscribeOnYoutube(){
    window.open("https://youtube.com/simdanger");
  }

}
