import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Addition } from '../addition/addition';

/**
 * Generated class for the Levelscreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-levelscreen',
  templateUrl: 'levelscreen.html',
})
export class Levelscreen {
    additionPage = Addition;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.navCtrl = navCtrl;
  }

    goToAddition(numlevel) {
        this.navCtrl.push(this.additionPage, {
            level: numlevel
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Levelscreen');
  }

}
