import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PushDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push-detail',
  templateUrl: 'push-detail.html',
})
export class PushDetailPage {
getSID:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,) {
      this.getSID = navParams.get('sid');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushDetailPage');
  }

}
