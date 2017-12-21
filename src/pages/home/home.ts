import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private alertCtrl : AlertController 
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  scan(){
    this.androidFingerprintAuth.isAvailable()
    .then((result)=> {
      if(result.isAvailable){
        // it is available 
        this.androidFingerprintAuth.encrypt({ clientId: 'Nayan014', username: 'Nayan014', password: 'abc' })
          .then(result => {
             if (result.withFingerprint) {
                 console.log('Successfully encrypted credentials.');
                 console.log('Encrypted credentials: ' + result.token);
                 //navigating to Credit Page
                 this.navCtrl.push('CreditPage');
             } else if (result.withBackup) {
               console.log('Successfully authenticated with backup password!');
               this.navCtrl.push('CreditPage');
             } else console.log('Didn\'t authenticate!');
          })
          .catch(error => {
             if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
               console.log('Fingerprint authentication cancelled');
             } else console.error(error)
          });
  
      } else {
        // fingerprint scanner isn't available
        var title: 'fingerprint scanner isnt available'
        this.basicAlert(title,'');
      }
    })
    .catch(error => console.error(error));
  }

  basicAlert(title,subTitle){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Ok']
    });
    alert.present();
  }

}
